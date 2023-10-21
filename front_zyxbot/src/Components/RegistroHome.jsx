import React, { useState } from "react";
import img from "../Components/img";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import icons from "./icons";

export const RegistroHome = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup, loginWhithGoogle } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();

  //Se acutualiza el objeto
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  //Registrando a un Usuario por correo y contraseña
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/chat");
    } catch (error) {
      setError(error.message);
    }
  };

  //Autentificando con Google
  const handleLoginGoogle = async () => {
    await loginWhithGoogle();
    navigate("/chat");
  };

  return (
    <section className="bg-gray-950 py-16">
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl text-white font-mont mb-4">
          Regístrate para Empezar Tu Viaje Educativo
        </h2>
        <p className="text-white font-popp mb-4">
          ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
          mundo de posibilidades educativas.
        </p>
      </div>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center">
        <div className="w-4/5 sm:w-1/2 mx-auto mb-8 sm:mb-0">
          <img
            src={img.registro_log}
            alt="Imagen de ZyxBot registro"
            className="w-full h-auto"
          />
        </div>
        <form
          className="w-full sm:w-1/3 ml-8 flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <div className="relative flex items-center w-80">
            <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
              <icons.AiOutlineUser className="text-3xl" />
            </div>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full h-14 px-8 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

          <div className="relative flex items-center w-80">
            <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
              <icons.AiOutlineUser className="text-3xl" />
            </div>
            <input
              type="text"
              placeholder="Apellido"
              className="w-full h-14 px-8 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

          <div className="relative flex items-center w-80">
            <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
              <icons.MdOutlineEmail className="text-3xl" />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              className="w-full h-14 px-8 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

          <div className="relative flex items-center w-80">
            <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
              <icons.RiLockPasswordLine className="text-3xl" />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              onChange={handleChange}
              className="w-full h-14 px-8 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

          <button className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300 mb-4">
            <a href="/chat">REGÍSTRARSE</a>
          </button>
          <h3 className="text-center text-white font-popp mb-4 ">
            ¿Ya tienes una Cuenta? Iniciemos sesión
          </h3>

          <div className="flex space-x-4">
            <button className=" w-20 h-11 px-6 py-2  flex items-center rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 ">
              <img
                src={img.facebook}
                alt="Icono de facebook"
                className="w-8 h-8"
              />
            </button>
            <button
              onClick={handleLoginGoogle}
              className=" w-20 h-11 px-6 py-2  rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700"
            >
              <img src={img.google} alt="Icono de Google" className="w-8 h-8" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
