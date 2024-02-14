import { useState } from "react";
import { toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const BASE_URL = "http://localhost:8000/api";
  const { setAuthUser } = useAuthContext();

  const handleErrors = (username, password) => {
    if (!username || !password) {
      toast.error("All fields are required!");
      return false;
    }

    return true;
  };

  const login = async (username, password) => {
    const success = handleErrors(username, password);
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }

      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
}
