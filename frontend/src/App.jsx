import { Navigate, Route, Routes } from "react-router-dom";
import GetStarted from "./components/GetStarted";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuthContext } from "./context/AuthContext";

export default function App() {
  const { authUser } = useAuthContext();

  return (
    <>
      <ToastContainer style={{ fontWeight: "600" }} />
      <div className="sm:p-4 px-3 min-h-screen justify-center flex items-center relative">
        <Routes>
          <Route
            path="/"
            element={authUser ? <Navigate to="/home" /> : <GetStarted />}
          />
          <Route
            path="/login"
            element={authUser ? <Navigate to="/home" /> : <Login />}
          />
          <Route
            path="/register"
            element={authUser ? <Navigate to="/home" /> : <Register />}
          />
          <Route
            path="/home"
            element={authUser ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </>
  );
}
