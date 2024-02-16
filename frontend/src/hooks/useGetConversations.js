import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function useGetConversations() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  const BASE_URL = "https://whisperwave-server.vercel.app//api";

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/users`, {
          credentials: "include",
        });
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }

        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { loading, conversations };
}
