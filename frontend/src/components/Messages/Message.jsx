import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";

import moment from "moment";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const isFromMe = message.senderId === authUser._id;
  const timeFormat = (time) => {
    const momentDate = moment(time).format("LT");
    return momentDate;
  };

  return (
    <div className={`chat ${isFromMe ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-9 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={
              isFromMe ? authUser?.profilePic : selectedConversation?.profilePic
            }
          />
        </div>
      </div>
      <div
        className={`chat-bubble ${message.shouldShake && "shake"} text-white ${
          isFromMe ? "bg-sky-500" : "bg-green-500"
        }`}
      >
        {message?.message}
      </div>
      <div className="chat-footer opacity-70 text-xs flex gap-1 items-center text-white font-semibold font-mono">
        {timeFormat(message?.createdAt)}
      </div>
    </div>
  );
}
