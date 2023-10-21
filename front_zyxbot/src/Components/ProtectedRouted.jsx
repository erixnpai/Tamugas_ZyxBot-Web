import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";


export function ProtectedRoute({children}){
    const {user} = useAuth();

    if (!user) return <Navigate to='/login' />

    return <>{children}</>;
}