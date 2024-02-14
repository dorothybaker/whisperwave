import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

export default function useRegister() {
  const BASE_URL = "http://localhost:8000/api";

  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const handleErrors = ({ fullName, username, password, gender }) => {
    if (!fullName || !username || !password || !gender) {
      toast.error("All fields are required!");
      return false;
    }

    if (password.length < 6) {
      toast.error("Password must be atleast 6 characters!");
      return false;
    }

    return true;
  };

  const register = async ({ fullName, username, password, gender }) => {
    const success = handleErrors({ fullName, username, password, gender });
    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ fullName, username, password, gender }),
      });

      const data = await res.json();

      //   setting the user in localStorage
      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, register };
}
