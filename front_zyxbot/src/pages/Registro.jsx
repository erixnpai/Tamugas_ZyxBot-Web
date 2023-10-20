import React, { useState } from "react";
import img from "../Components/img";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";
import icons from "../Components/icons";

export const Registro = () => {
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
    <div className="grid grid-cols-1 sm:grid-cols-3 h-screen w-full">
      <div className="sm:col-span-2 hidden sm:block">
        <img
          src={img.registroCover}
          alt="Aqui se muestra imagen del login"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="bg-gray-950 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit} // Asigna la función de registro al evento onSubmit
          className="max-w-[400px] w-full mx-auto bg-slate-950 p-10 px-8 rounded-lg"
        >
          <div className="mb-4 flex flex-col">
          <div className="relative flex items-center w-80">
            <div className="absolute left-0 top-0 h-14 w-14 text-gray-400 flex items-center justify-center">
              <icons.AiOutlineUser className="text-3xl" />
            </div>
            <input
              type="text"
              name="nombre"
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
              name="apellido"
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
              placeholder="zyxbot@gmail.com"
              className="w-full h-14 px-8 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
              onChange={handleChange}
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
              className="w-full h-14 px-8 py-2 pl-16 bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
              onChange={handleChange}
            />
            </div>

            <div className="mb-4 flex justify-center">
              <button
                type="submit"
                className="font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-200 transition duration-300"
              >
                REGÍSTRARSE
              </button>
            </div>
            <h3 className="text-center text-white font-semibold mb-4">
              ¿Ya tienes una Cuenta? Iniciemos sesión
            </h3>
          </div>
          <div className="flex space-x-4 justify-center">
            {/* Botón 2 */}
            <div className="mb-4">
              <button className="text-white px-8 py-2 rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-white transition duration-300 ease-in-out">
                <img src={img.facebook} alt="" className="w-8 h-8" />
              </button>
            </div>

            {/* Botón 3 */}
            <div className="mb-4">
              <button
                onClick={handleLoginGoogle}
                className="text-white px-8 py-2 rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 hover:bg-red-500 transition duration-300 ease-in-out"
              >
                <img src={img.google} alt="" className="w-8 h-8 " />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
