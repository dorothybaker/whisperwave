import { useEffect, useState } from "react";
import useConversation from "../store/useConversation";
import { toast } from "react-toastify";

export default function useGetMessages() {
  const BASE_URL = "https://whisperwave-server.vercel.app//api";

  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${BASE_URL}/messages/${selectedConversation._id}`,
          { credentials: "include" }
        );
        const data = await res.json();

        if (data.error) throw new Error(data.error);
        setMessages(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
}
