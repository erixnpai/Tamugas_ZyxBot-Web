import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
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
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Autentificación con Google
  const loginWhithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Guardar consultas en Firestore
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

  // Registro de usuario
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  // Inicio de sesión
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  // Cierre de sesión
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        loading,
        logout,
        loginWhithGoogle,
        saveQueriesFunctions,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
