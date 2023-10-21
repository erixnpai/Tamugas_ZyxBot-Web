import React, { useState, useEffect } from "react";
import img from "../Components/img";
import icons from "../Components/icons";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-2 ${
        scrolling
          ? "fixed top-0 left-0 right-0 bg-[#040C1C] bg-opacity-50"
          : "bg-[#040C1C]"
      } z-50`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <icons.AiOutlineClose /> : <icons.AiOutlineMenu />}
          </button>
          <ul className={`text-white text-xl font-poppins font-bold flex space-x-8 items-center ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <li className="relative flex items-center">
              <a href="/" id="#inicio" className="flex items-center">
                <img src={img.logo} alt="Logo ZyxBot" className="w-52 h-auto" />
              </a>
            </li>
            <li className="relative flex items-center justify-center">
              <a href="#Bienvenida" className="hover:text-blue-500">
                Inicio
              </a>
            </li>
            <li className="relative flex items-center justify-center">
              <a href="#ventajas" className="hover:text-blue-500">
                Ventajas
              </a>
            </li>
            <li className="relative flex items-center justify-center">
              <a href="#opiniones" className="hover:text-blue-500">
                Opiniones
              </a>
            </li>
            <li className="relative flex items-center justify-center">
              <a href="#soporte" className="hover:text-blue-500">
                Soporte
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 font-poppins font-bold">
            <a href="/login">
            <button className="bg-blue-500 text-white w-40 h-10 px-2 py-2 rounded-lg hover:bg-blue-800 hover:text-white">
              INICIAR SESIÓN
            </button>
          </a>
          <a href="/registro">
            <button className="bg-[#0C0076] text-white w-40 h-10 px-2 py-2 rounded-lg hover:bg-blue-800 hover:text-white">
              REGISTRARSE
            </button>
          </a>
        </div>
      </div>
    </div>
  </nav>
  )
}
