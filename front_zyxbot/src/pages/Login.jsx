import React, { useState } from "react";
import img from "../Components/img";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const navigate = useNavigate();

  const [error, setError] = useState();  

  //Se acutualiza el objeto
  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("")
    try {
      await login(user.email, user.password);
      navigate("/chat");
    } catch (error) {
      setError(error.message)
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 h-screen w-full">
      <div className="bg-gray-950 flex flex-col justify-center items-center">
        <form className="max-w-[400px] w-full mx-auto bg-slate-950 p-10 px-8 rounded-lg"
        onSubmit={handleSubmit}>
          {/* Tus campos de entrada aquí */}
          <div className="mb-4 flex flex-col">
          <input
              type="email"
              name="email"
              required
              placeholder="zyxbot@gmail.com"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              required
              placeholder="Contraseña"
              className="px-10 py-4 bg-gray-900 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 flex justify-center text-xl">
            <button className=" w-60 h-12 text-center font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg ">
              <a href="/chat">INICIAR</a>
            </button>
          </div>
          <h3 className="text-center text-white font-semibold mb-4">
            ¿Ya tienes una Cuenta? Iniciemos sesión
          </h3>
          <div className="mb-4 flex justify-center items-center text-xl">
            <button className="w-60 h-12 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg flex items-center">
              <img
                src={img.facebook}
                alt="Icono de Facebook"
                className="w-8 h-8 mr-8"
              />
              Facebook
            </button>
          </div>
          <div className="mb-4 flex justify-center items-center text-xl">
            <button className="w-60 h-12 font-bold bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700 text-white px-8 py-2 rounded-lg flex items-center">
              <img
                src={img.google}
                alt="Icono de Google"
                className="w-8 h-8 mr-8"
              />
              Google
            </button>
          </div>
        </form>
      </div>

      <div className="sm:col-span-2 hidden sm:block">
        <img
          src={img.loginCover}
          alt="Aqui se muestra imagen del login"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};