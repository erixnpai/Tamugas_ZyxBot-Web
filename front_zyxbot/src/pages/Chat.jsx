import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/authContext";
import logo from "../img/Logo.webp";

export const Chat = () => {
  const [mensaje, setMensaje] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const [respuesta, setRespuesta] = useState("");

  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  async function fetchData() {
    try {
      const response = await fetch("http://127.0.0.1:8000/prompt ", {
        method: "POST",
        body: JSON.stringify({ mensaje: mensaje }),
      });

      const data = await response.json();
      console.log(data + " "+ mensaje );
      if (
        data.hasOwnProperty("response") &&
        data.response.hasOwnProperty("out-0")
      ) {
        setRespuesta(data.response["out-0"]);
        setChatHistory((chatHistory) => [
          ...chatHistory,
          { autor: "chatbot", contenido: data.response["out-0"] },
        ]);
      } else {
        setRespuesta("Error al obtener la respuesta de la API");
      } // actualiza la propiedad 'respuesta' en lugar de 'respuesta'
    } catch (error) {
      setRespuesta(error.message);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setChatHistory((chatHistory) => [
      ...chatHistory,
      { autor: "usuario", contenido: mensaje },
    ]);
    fetchData();
  };

  return (
    <div className="flex h-screen bg-[#4D4D4D]">
      <aside className="w-1/5 bg-[#040C1C] py-6 flex flex-col justify-between">
        <div>
          <img
            src={logo}
            alt="Logo de ZyxBot"
            className="w-60 h-auto mx-auto mb-10 shadow-lg"
          />
          <div className="flex flex-col items-center">
            <button className="bg-gradient-to-r from-[#331AFF] to-[#0C0076] text-white font-bold w-60 h-12 rounded-lg shadow-lg mb-5">
              Crear nuevo chat
            </button>
            <button className="bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white font-bold w-60 h-12 rounded-lg shadow-lg mb-5">
              Nombre del chat
            </button>
            <button className="border border-gray-800 hover:bg-gray-800 text-white font-bold w-60 h-12 rounded-lg shadow-lg mb-60">
              Nombre del chat
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold w-40 h-10 rounded-lg shadow-lg "
            >
              <a href="/">Cerrar sesión</a>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-grow flex flex-col justify-between bg-[#4D4D4D]">
        <div className="bg-[#222222] h-28 flex items-center"></div>
        <div className="flex-grow overflow-y-auto mb-4">
          {/* Mapear a través de la historia del chat y renderizar cada mensaje y respuesta */}
          {chatHistory.map((chatItem, index) => (
            <div
              key={index}
              className={`my-2 p-3 rounded-lg ${
                chatItem.autor === "usuario"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {chatItem.contenido}
            </div>
          ))}
        </div>

        <div className="bg-[#222222] p-4 h-32 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="w-full">
              <input
                type="text"
                name="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
              <button
                type="submit"
                className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-lg"
              >
                Enviar
              </button>
            </form>
          </div>
          <p className="text-white text-center text-xs">
            Asistente ZyxBot - V.0.1. Todos los derechos reservados para el
            equipo Tamuga.
          </p>
        </div>
      </main>
    </div>
  );
};
