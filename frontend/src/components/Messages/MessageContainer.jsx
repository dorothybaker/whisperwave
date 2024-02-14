import MobileSidebar from "../Sidebar/MobileSidebar";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

import { TiMessages } from "react-icons/ti";

import { MdMore } from "react-icons/md";
import useConversation from "../../store/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";

export default function MessageContainer() {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { authUser } = useAuthContext();

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md:w-[500px] flex flex-col w-full">
      <>
        {/* Header */}
        <div className="bg-slate-500 py-2 sm:px-4 px-2.5 flex justify-between items-center">
          {!selectedConversation ? (
            <div className="md:p-3"></div>
          ) : (
            <div>
              <span>TO: </span>
              <span className="font-semibold text-gray-900">
                {selectedConversation?.fullName}
              </span>
            </div>
          )}
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          <button
            className="cursor-pointer text-white md:hidden block justify-self-end"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <MdMore size={20} />
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box px-2 py-0">
              <div className="w-full flex flex-col">
                <MobileSidebar />
              </div>
            </div>
          </dialog>
        </div>

        {!selectedConversation ? (
          <NoChatSelected authUser={authUser} />
        ) : (
          <Messages />
        )}

        <MessageInput noChatSelected={selectedConversation} />
      </>
    </div>
  );
}

const NoChatSelected = ({ authUser }) => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="sm:px-4 px-2 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <h1>WhisperWave</h1>
        <p>
          Welcome ✨<span className="text-sky-500">{authUser?.fullName}</span>✨
        </p>
        <p>Select a chat to start messaging</p>

        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
