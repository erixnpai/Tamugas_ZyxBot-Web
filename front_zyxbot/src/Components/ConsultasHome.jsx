import React, { useState } from "react";
import img from "../Components/img";
import { useAuth } from "../Context/authContext";
import "firebase/firestore";
import icons from "./icons";

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
      console.log("Consultas antes de limpiar:", consultas); // Verifica los valores actuales
      setConsultas({
        name: "",
        movil: "",
        email: "",
        sms: "",
      });
      console.log("Consultas después de limpiar:", consultas); // Verifica si se han limpiado
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section id="soporte" className="bg-gray-950 py-16">
  <h2 className="text-5xl text-white text-center font-mont mb-10">
    Envíanos tus consultas y comentarios
  </h2>
  <div className="container mx-auto flex flex-col lg:flex-row">
    <form
      className="w-full lg:w-1/3 mb-8 lg:mb-0 flex flex-col items-center"
      onSubmit={onSubmitQueries}
    >
      <div className="relative w-30 mx-2">
        <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
          <icons.AiOutlineUser className="text-3xl" />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Nombre y Apellido"
          className="w-64 h-14 px-6 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
          onChange={handleChange}
          value={consultas.name}
        />
      </div>

      <div className="relative w-30 mx-2">
        <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
          <icons.AiFillPhone className="text-3xl" />
        </div>
        <input
          type="text"
          name="movil"
          id="movil"
          placeholder="Teléfono"
          className="w-64 h-14 px-6 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
          onChange={handleChange}
          value={consultas.movil}
        />
      </div>

      <div className="relative w-30 mx-2">
        <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
          <icons.MdOutlineEmail className="text-3xl" />
        </div>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Correo Electrónico"
          className="w-64 h-14 px-6 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
          onChange={handleChange}
          value={consultas.email}
        />
      </div>

      <div className="relative w-30 mx-2">
        <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
          <icons.AiFillWechat className="text-3xl" />
        </div>
        <textarea
          placeholder="Mensaje"
          id="sms"
          name="sms"
          rows="4"
          className="w-64  px-6 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
          onChange={handleChange}
          value={consultas.sms}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300"
      >
        ENVIAR
      </button>
    </form>
    <div className="w-2/1 h-28 px-8 flex flex-col items-center">
      <img
        src={img.logo}
        alt="Logo de ZyxBot"
        className="image-style mb-8"
      />
    </div>
  </div>
</section>

  );
};
