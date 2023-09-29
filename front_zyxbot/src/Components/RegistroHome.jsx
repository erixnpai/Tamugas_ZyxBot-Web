import React from 'react'
import img from "../Components/img";

export const RegistroHome = () => {
  return (
    <section className="bg-gray-950 py-16">
    <div className="text-center">
      <h2 className="text-5xl text-white font-mont mb-4">
        Regístrate para Empezar Tu Viaje Educativo
      </h2>
      <p className="text-white font-popp mb-4">
        ¡Bienvenido a ZyxBot! Regístrate ahora para comenzar a explorar un
        mundo de posibilidades educativas.
      </p>
    </div>
    <div className="container mx-auto flex items-center justify-center">
      <div className="w-1/2">
        <img
          src={img.registro_log}
          alt="Imagen de ZyxBot registro"
          className="w-full h-auto"
        />
      </div>
      <form className="w-1/3 ml-8 flex flex-col items-center ">
        <input
          type="text"
          placeholder="Nombre"
          className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
        />
        <input
          type="text"
          placeholder="Apellido"
          className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
        />
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
        />

        <button className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300 mb-4">
          REGÍSTRARSE
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
          <button className=" w-20 h-11 px-6 py-2  rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">
            <img src={img.google} alt="Icono de Google" className="w-8 h-8" />
          </button>
        </div>
      </form>
    </div>
  </section>
  );
};

