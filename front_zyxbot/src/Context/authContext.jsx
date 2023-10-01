import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, db } from "../Firebase/Firebase"; // Asegúrate de importar db desde firebaseConfig
import { addDoc, collection } from "firebase/firestore";
import Swal from "sweetalert2";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay un proveedor");
  return context;
};

export function AuthProvider({ children }) {
  const signup = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Puedes realizar otras acciones después de registrarte aquí si es necesario
    } catch (error) {
      console.error("Error al registrar:", error);
      throw error; // Puedes manejar el error aquí o pasarlo a componentes superiores
    }
  };

  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Puedes realizar otras acciones después de iniciar sesión aquí si es necesario
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      throw error; // Puedes manejar el error aquí o pasarlo a componentes superiores
    }
  };

  const saveQueriesFunctions = async (Consultas) => {
    const newDoc = {
      name: Consultas.name,
      movil: Consultas.movil,
      email: Consultas.email,
      sms: Consultas.sms,
    };

    try {
      const docRef = await addDoc(collection(db, "Consultas"), newDoc);
      Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Consulta enviada correctamente",
      });
      console.log("Consulta agregada con ID: ", docRef.id);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar su consulta",
      });
    }
  };

  return (
    <authContext.Provider value={{ signup, login, saveQueriesFunctions }}>
      {children}
    </authContext.Provider>
  );
}
