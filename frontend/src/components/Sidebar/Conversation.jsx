import useConversation from "../../store/useConversation";
import { useSocketContext } from "../../context/SocketContext";

export default function Conversation({ conversation, lastIdx }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center gap-2 hover:bg-sky-500 rounded-md p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => {
          setSelectedConversation(conversation);
          document.getElementById("my_modal_3").close();
        }}
      >
        <div className={`avatar ${isOnline && "online"}`}>
          <div className="w-11 rounded-full">
            <img src={conversation?.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h1 className="text-gray-200 font-semibold">
            {conversation?.fullName}
          </h1>
          <p className="text-sm">@{conversation?.username}</p>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
}
