import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

export default function MessageInput({ noChatSelected }) {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSubmit = async () => {
    if (!message || message === "") return;

    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      className="sm:px-4 px-2 my-3"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="w-full join bg-gray-700 border-gray-600">
        <input
          type="text"
          className="join-item text-base rounded-lg block w-full p-2 text-white bg-transparent outline-none"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {noChatSelected && (
          <button
            type="submit"
            className="join-item inset-y-0 end-0 flex items-center pe-3"
            disabled={loading}
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <BsSend />
            )}
          </button>
        )}
      </div>
    </form>
  );
}
