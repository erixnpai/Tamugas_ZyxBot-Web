import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("No hay un proveedor");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //REGISTRO
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  //lOGING
  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  //lOGOUT
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //Autentificacion con Google
  const loginWhithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  return (
    <authContext.Provider value={{ signup, login, user, loading, logout, loginWhithGoogle }}>
      {children}
    </authContext.Provider>
  );
}
