import { useAuth } from "../Context/authContext";
import logo from "../img/Logo.webp";

export const Chat = () => {

  const { user, logout} = useAuth();
  
  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="flex h-screen bg-[#4D4D4D]">
      <aside className="w-1/5 bg-[#040C1C] py-6 flex flex-col justify-between">
        <div>
          <img
            src={logo}
            alt="Logo de ZyxBot"
            className="w-60 h-auto mx-auto mb-10 shadow-lg"
          />
          <div className="flex flex-col items-center">
            <button className="bg-gradient-to-r from-[#331AFF] to-[#0C0076] text-white font-bold w-60 h-12 rounded-lg shadow-lg mb-5">
              Crear nuevo chat
            </button>
            <button className="bg-gradient-to-r from-[#333333] to-[#4D4D4D] text-white font-bold w-60 h-12 rounded-lg shadow-lg mb-5">
              Nombre del chat
            </button>
            <button className="border border-gray-800 hover:bg-gray-800 text-white font-bold w-60 h-12 rounded-lg shadow-lg mb-60">
              Nombre del chat
            </button>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold w-40 h-10 rounded-lg shadow-lg ">
              <a href="/">Cerrar sesión</a>
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-grow flex flex-col justify-between bg-[#4D4D4D]">
        <div className="bg-[#222222] h-28 flex items-center"></div>

        <div className="bg-[#222222] p-4 h-32 flex flex-col items-center justify-center">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Ingrese su pregunta..."
              className="w-[600px] px-4 py-2 rounded-lg text-white bg-[#4D4D4D] focus:outline-none"
            />
            <button className="ml-4 px-6 py-2 bg-[#4D4D4D] text-white font-bold rounded-lg hover:bg-blue-600 focus:outline-none">
              Enviar
            </button>
          </div>
          <p className="text-white text-center text-xs">
            Asistente ZyxBot - V.0.1. Todos los derechos
            reservados para el equipo Tamuga.
          </p>
        </div>
      </main>
    </div>
  );
};