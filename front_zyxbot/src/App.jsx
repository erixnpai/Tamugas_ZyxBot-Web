import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Context/authContext";
import { Home } from "./pages/Home";
import { Chat } from "./pages/Chat";
import { Login } from "./pages/Login";
import { Registro } from "./pages/Registro";
import { ProtectedRoute } from "./Components/ProtectedRouted";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
