import React from 'react'
import img from "../Components/img";

export const ConsultasHome = () => {
  return (
    <section id="soporte" className="bg-gray-950 py-16">
        <h2 className="text-5xl text-white text-center font-mont mb-10">
          Envíanos tus consultas y comentarios
        </h2>
        <div className="flex">
          <form className="w-1/3 ml-8 flex flex-col items-center">
            <input
              type="text"
              placeholder="Nombres y Apellidos"
              className="w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="text"
              placeholder="Teléfono"
              className=" w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
            <input
              type="text"
              placeholder="Correo electrónico"
              className=" w-64 h-14 px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />

            <textarea
              placeholder="Mensaje"
              rows="4"
              className="w-64  px-8 py-2 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            ></textarea>
            <button className="w-30 h-10 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg hover:bg-blue-200 transition duration-300">
              ENVIAR
            </button>
          </form>
          <div className="w-2/3 flex flex-col items-center">
            <img src={img.logo} alt="Logo de ZyxBot" className="image-style mb-8" />
            <div className="flex space-x-4">
              <img src={img.twitter} alt="Icono de Twitter" className="w-10 h-10" />
              <img
                src={img.instagram}
                alt="Icono de instagram"
                className="w-10 h-10"
              />
              <img
                src={img.facebook}
                alt="Icono de facebook"
                className="w-10 h-10"
              />
              <img src={img.tiktok} alt="Icono de tiktok" className="w-10 h-10" />
              <img
                src={img.whatsapp}
                alt="Icono de whatsapp"
                className="w-10 h-10"
              />
              <img src={img.yotube} alt="Icono de yotube" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </section>
  )
}
