import React, { useState } from "react";
import img from "../Components/img";
import { useAuth } from "../Context/authContext";
import { useNavigate } from "react-router-dom";

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
        <form className="w-1/3 ml-8 flex flex-col items-center " onSubmit={handleSubmit}>
          <div className="relative flex items-center w-80">
            <svg
              width="40"
              height="40"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="absolute left-4 text-gray-400"
            >
              {/* Aquí tu código SVG */}
              <rect
                width="58"
                height="58"
                fill="url(#pattern0)"
                fillOpacity="0.7"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_108_114"
                    transform="scale(0.0104167)"
                  />
                </pattern>
                <image
                  id="image0_108_114"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADHklEQVR4nO3cy0pVURzH8dUgtLCoQWAEBZUSlUI1ym7QM5QW9AIRFc27DwrCSRNLy0eIXqAGBWVIg6CJ1SC7Uemk6Fh6BL+xOquLDcSje+//2mf9PnDgcDy41n/9z76s23ZOREREREREREQkMsBK4ChwCxgGxoBqeI2FzwaAI8AK6/o2DKAdGAQmmD//3dtAm3X9SwtYBvQC0yycPzquAc3W8ZQK0AY8JztDwFrruEoB2BHO6Vl7B3Rax1eGX/5YDo3/bxJareOMEtAMPCN/T/31xTre6FC74BblknW8Md5qTheYgG86Fc1OwCDF67P7ycXXw50wSEBFPWb3KwF+eMFKj0sdtbEdK/0uddQG0awMudQB44YJ+OxSB0wZJmDSpQ4lwDwB44ZHgE5B6CJsfgQMGB4BN13qqM3hWjnsUge0hGGBovkyW6zjjwK1CfSiDVjHHdtMWLXAxvd9j43WcUeF2uqFoly1jjfWKcmhAhr/MdBkHW+UgFbgbY6N/wFYZx1n1IDOsHohaz6xHdbxlQKwBniQ8WlHy1HqTEKTX72wyD6Cv9u5onP+4q8LfXUmwn+3X7ea2feYe/z4DfDEj2SGX/hUeO8/uwF0q4crIiIiIiIiIiIiUY/97we2F1BWB7Av+TkCYBdwDrgPfA/j+B+B9Tk2/gbgUyjLl3kPOAvsdCkAtgEXgRdzTKa8Bjbl1Piv5ih3FLgO7AWWuEYBrAbOAC/rmNF6D3RlWIc94X/O1whwGljlygrYEpYcLnQLajXMCS/4sQLAcuDyIjaBV8Lq7XZXFv6xMGE+Nqud76PAyXqmGf3+X+AU8CajOkyH6c54V1YAS4ELOa50rgB3gOPA7jBZ3xxe/n1X+NvdHDd++zqc97G6mIQL3CPSMQxsdjEIKxW+kp4vwCHrxvd3CjOkawY4YdX43Yk3/m++DY5ZdKgm/1RBfgBbi0yAX+wqsz0sqvEP/lew/HWgUZ9uVRb5b/yrc0wnNSNFJMDi8WJlUSkiATIHJcCYEmBMCTCmBBhTAowpAcaUAGNKgDEloNETICIiIiIiIiIirqx+AqfINHaVA0y6AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <input
              type="text"
              placeholder="Nombre"
              className="w-full h-14 px-8 py-2 pl-16 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

          <div className="relative flex items-center w-80">
            <svg
              width="40"
              height="40"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="absolute left-4 text-gray-400"
            >
              {/* Aquí tu código SVG */}
              <rect
                width="58"
                height="58"
                fill="url(#pattern0)"
                fillOpacity="0.7"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_108_114"
                    transform="scale(0.0104167)"
                  />
                </pattern>
                <image
                  id="image0_108_114"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADHklEQVR4nO3cy0pVURzH8dUgtLCoQWAEBZUSlUI1ym7QM5QW9AIRFc27DwrCSRNLy0eIXqAGBWVIg6CJ1SC7Uemk6Fh6BL+xOquLDcSje+//2mf9PnDgcDy41n/9z76s23ZOREREREREREQkMsBK4ChwCxgGxoBqeI2FzwaAI8AK6/o2DKAdGAQmmD//3dtAm3X9SwtYBvQC0yycPzquAc3W8ZQK0AY8JztDwFrruEoB2BHO6Vl7B3Rax1eGX/5YDo3/bxJareOMEtAMPCN/T/31xTre6FC74BblknW8Md5qTheYgG86Fc1OwCDF67P7ycXXw50wSEBFPWb3KwF+eMFKj0sdtbEdK/0uddQG0awMudQB44YJ+OxSB0wZJmDSpQ4lwDwB44ZHgE5B6CJsfgQMGB4BN13qqM3hWjnsUge0hGGBovkyW6zjjwK1CfSiDVjHHdtMWLXAxvd9j43WcUeF2uqFoly1jjfWKcmhAhr/MdBkHW+UgFbgbY6N/wFYZx1n1IDOsHohaz6xHdbxlQKwBniQ8WlHy1HqTEKTX72wyD6Cv9u5onP+4q8LfXUmwn+3X7ea2feYe/z4DfDEj2SGX/hUeO8/uwF0q4crIiIiIiIiIiIiUY/97we2F1BWB7Av+TkCYBdwDrgPfA/j+B+B9Tk2/gbgUyjLl3kPOAvsdCkAtgEXgRdzTKa8Bjbl1Piv5ih3FLgO7AWWuEYBrAbOAC/rmNF6D3RlWIc94X/O1whwGljlygrYEpYcLnQLajXMCS/4sQLAcuDyIjaBV8Lq7XZXFv6xMGE+Nqud76PAyXqmGf3+X+AU8CajOkyH6c54V1YAS4ELOa50rgB3gOPA7jBZ3xxe/n1X+NvdHDd++zqc97G6mIQL3CPSMQxsdjEIKxW+kp4vwCHrxvd3CjOkawY4YdX43Yk3/m++DY5ZdKgm/1RBfgBbi0yAX+wqsz0sqvEP/lew/HWgUZ9uVRb5b/yrc0wnNSNFJMDi8WJlUSkiATIHJcCYEmBMCTCmBBhTAowpAcaUAGNKgDEloNETICIiIiIiIiIirqx+AqfINHaVA0y6AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <input
              type="text"
              placeholder="Apellido"
              className="w-full h-14 px-8 py-2 pl-16 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

          <div className="relative flex items-center w-80">
            <svg
              width="40"
              height="40"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="absolute left-4 text-gray-400"
            >
              <rect
                width="58"
                height="58"
                fill="url(#pattern0)"
                fillOpacity="0.7"
              />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlinkHref="#image0_108_114"
                    transform="scale(0.0104167)"
                  />
                </pattern>
                <image
                  id="image0_108_114"
                  width="96"
                  height="96"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADHklEQVR4nO3cy0pVURzH8dUgtLCoQWAEBZUSlUI1ym7QM5QW9AIRFc27DwrCSRNLy0eIXqAGBWVIg6CJ1SC7Uemk6Fh6BL+xOquLDcSje+//2mf9PnDgcDy41n/9z76s23ZOREREREREREQkMsBK4ChwCxgGxoBqeI2FzwaAI8AK6/o2DKAdGAQmmD//3dtAm3X9SwtYBvQC0yycPzquAc3W8ZQK0AY8JztDwFrruEoB2BHO6Vl7B3Rax1eGX/5YDo3/bxJareOMEtAMPCN/T/31xTre6FC74BblknW8Md5qTheYgG86Fc1OwCDF67P7ycXXw50wSEBFPWb3KwF+eMFKj0sdtbEdK/0uddQG0awMudQB44YJ+OxSB0wZJmDSpQ4lwDwB44ZHgE5B6CJsfgQMGB4BN13qqM3hWjnsUge0hGGBovkyW6zjjwK1CfSiDVjHHdtMWLXAxvd9j43WcUeF2uqFoly1jjfWKcmhAhr/MdBkHW+UgFbgbY6N/wFYZx1n1IDOsHohaz6xHdbxlQKwBniQ8WlHy1HqTEKTX72wyD6Cv9u5onP+4q8LfXUmwn+3X7ea2feYe/z4DfDEj2SGX/hUeO8/uwF0kwd+wRpH0bT4IH8A2K+P0cxCyvWMGAuyB+AL2eTaaGcjgHFJgmESN/Z6wMf0EFxl82nS5jy2do6Fm7zftAOqSgUw+fMlm+zdz/ACnSfyFt9NkgivhpRilGAYgfo3j7WKKdy0O+KsL2nhQl8bAFSJCw4rzSAjYgjgKZjAaGI4Af4T3WDSl4bxmBK59N8Fr2XChHlqrzvEFiOz1WtG5laYf5B8pUNlFRYIiIiIiIiIiIirqx+AqfINHaVA0y6AAAAAElFTkSuQmCC"
                />
              </defs>
            </svg>
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              onChange={handleChange}
              className="w-full h-14 px-8 py-2 pl-16 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
            />
          </div>

         
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
            className="w-80 h-14 px-8 py-2 bg-gray-800 text-white rounded-md focus:outline-none focus:bg-gray-700 mb-4"
          />

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
            <button onClick={handleLoginGoogle} className=" w-20 h-11 px-6 py-2  rounded-lg bg-gradient-to-r from-blue-950 via-blue-900 to-blue-700">
              <img src={img.google} alt="Icono de Google" className="w-8 h-8" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
