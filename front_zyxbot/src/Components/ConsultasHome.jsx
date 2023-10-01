import React, { useState } from "react";
import img from "../Components/img";
import { useAuth } from "../Context/authContext";
import "firebase/firestore";

export const ConsultasHome = () => {
  const { saveQueriesFunctions } = useAuth();
  const [consultas, setConsultas] = useState({
    name: "",
    movil: "",
    email: "",
    sms: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setConsultas({
      ...consultas,
      [name]: value,
    });
  };

  const onSubmitQueries = async (e) => {
    e.preventDefault();
    try {
      await saveQueriesFunctions(consultas);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="soporte" className="bg-gray-950 py-16">
      <h2 className="text-5xl text-white text-center font-mont mb-10">
        Envíanos tus consultas y comentarios
      </h2>
      <div className="flex">
        <form
          className="w-1/3 ml-8 flex flex-col items-center"
          onSubmit={onSubmitQueries}
        >
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="escribe tu nombre"
            className="w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            onChange={handleChange}
          />
          <input
            type="text"
            name="movil"
            id="movil"
            placeholder="Teléfono"
            className=" w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Correo electrónico"
            className=" w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            onChange={handleChange}
          />

          <textarea
            placeholder="Mensaje"
            id="sms"
            name="sms"
            rows="4"
            className="w-64  px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300"
          >
            ENVIAR
          </button>
        </form>
        <div className="w-2/3 flex flex-col items-center">
          <img
            src={img.logo}
            alt="Logo de ZyxBot"
            className="image-style mb-8"
          />
          <div className="flex space-x-4">
            {/* Iconos de redes sociales */}
          </div>
        </div>
      </div>
    </section>
  );
};
