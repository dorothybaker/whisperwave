import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/messageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

export default function Messages() {
  const { messages, loading } = useGetMessages();
  const messageRef = useRef(null);
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      messageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="sm:px-4 px-2 flex-1 overflow-auto pt-2">
      {loading &&
        [1, 2, 3, 4].map((item, idx) => <MessageSkeleton key={idx} />)}

      {!loading && messages.length < 1 && (
        <div className="h-full flex items-center justify-center flex-col text-center">
          <h1 className="text-xl font-semibold">WhisperWave</h1>
          <p>Send a message to start a conversation!</p>
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={messageRef}>
            <Message message={message} />
          </div>
        ))}
    </div>
  );
}
