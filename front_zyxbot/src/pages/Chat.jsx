import React, { useState, useEffect } from "react";
import { useAuth } from "../Context/authContext";
import logo from "../img/Logo.webp";
import icons from "../Components/icons";
import users from "../img/user.webp";
import zyxbot from "../img/iconzyx.png";

export const Chat = () => {
  const [mensaje, setMensaje] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth >= 768); // Inicialmente, mostrar el menú en vista de escritorio

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
      console.log(mensaje);
      console.log(data);
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


  // Escucha el evento de cambio de tamaño de la ventana
  useEffect(() => {
    const handleResize = () => {
      // Actualiza la visibilidad del menú en función del ancho de la ventana
      setIsMenuOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // Limpia el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatHistory((chatHistory) => [
      ...chatHistory,
      { autor: "usuario", contenido: mensaje },
    ]);
    fetchData();
    setMensaje(""); // Esto limpia el mensaje después de enviarlo
  };

  return (
    <div className="flex h-screen bg-[#4D4D4D]">
      <aside
        className={`overflow-auto w-full md:w-1/5 bg-[#040C1C] py-6 flex flex-col justify-between transform transition-transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:relative fixed h-full top-0 left-0 z-20`}
      >
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-5xl"
        >
          {isMenuOpen ? <icons.AiOutlineMenu /> : <icons.AiOutlineMenu />}
        </button>
        <div>
          <img
            src={logo}
            alt="Logo de ZyxBot"
            className="w-60 md:w-40 lg:w-[176px] h-auto mx-auto mb-10 shadow-lg"
          />
          <div className="flex flex-col items-center">
            <button className="w-full md:w-3/4 bg-gradient-to-r from-[#331AFF] to-[#0C0076] text-white font-bold w-72 h-12 rounded-lg shadow-lg mb-5">
              Crear nuevo chat
            </button>
            <button className="w-full md:w-3/4  bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white font-bold w-72 h-12 rounded-lg shadow-lg mb-5">
              Nombre del chat
            </button>
            <button className="w-full md:w-3/4  border border-gray-800 hover:bg-gray-800 text-white font-bold w-72 h-12 rounded-lg shadow-lg mb-60">
              Nombre del chat
            </button>
            <button
              onClick={handleLogout}
              className="w-full md:w-3/4 bg-red-500 hover:bg-red-600 text-white  w-72  font-bold h-10 rounded-lg shadow-lg"
            >
              <a href="/">Cerrar sesión</a>
            </button>
          </div>
        </div>
      </aside>

      <div
        onClick={toggleMenu}
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black opacity-50 ${isMenuOpen ? 'block' : 'hidden'} z-10`}
      ></div>
      <main className="w-full md:w-4/5 flex-grow flex flex-col justify-between bg-[#4D4D4D]">
        <button onClick={toggleMenu} className="md:hidden text-white text-5xl">
          {isMenuOpen ? <icons.AiOutlineMenu /> : <icons.AiOutlineMenu />}
        </button>
        <div className="flex-grow overflow-y-auto mb-4 flex flex-col">
          {/* Mapear a través de la historia del chat y renderizar cada mensaje y respuesta */}
          {chatHistory.map((chatItem, index) => (
            <div
              key={index}
              className={`my-2 flex gap-4 justify-arround   p-4 ${chatItem.autor === "usuario"
                ? "bg-[#222222] text-white  text-justify px-12 "
                : "bg-[#4D4D4D] text-white  text-justify px-12"
                }`}
            >
              {chatItem.autor === "usuario"
                ? <img src={users} className="w-[50px] h-[50px]" alt="User" />
                : <img src={zyxbot} className="w-[50px] h-[50px]" alt="Zyxbot" />
                }
              
              <p className="align-middle">{chatItem.contenido }</p>
            </div>
          ))}
        </div>
        <div className="bg-[#222222] p-4 h-32 flex flex-col items-center justify-center">
          <div className="flex w-50 md:w-100 items-center">
            <form onSubmit={handleSubmit} className="w-full flex items-center">
              <div className="relative w-full ">
                <input
                  type="text"
                  name="mensaje"
                  placeholder="Ingrese su pregunta"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="w-auto md:w-[500px]  px-3 py-2 rounded-lg pl-10 text-white bg-gradient-to-r from-[#333333] to-[#4D4D4D]"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white rounded-lg p-2"
                >
                  <icons.RiSendPlaneFill />
                </button>
              </div>
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
