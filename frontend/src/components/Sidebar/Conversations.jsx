import useGetConversations from "../../hooks/useGetConversations";
import Conversation from "./Conversation";

export default function Conversations({ filter }) {
  const { loading, conversations } = useGetConversations();

  return (
    <div className="py-2 flex-col overflow-auto">
      {loading && <span className="loading loading-spinner mx-auto"></span>}

      {conversations
        .filter(
          (conversation) =>
            conversation?.fullName
              .toLowerCase()
              .includes(filter?.toLowerCase()) ||
            conversation?.username.toLowerCase().includes(filter?.toLowerCase())
        )
        ?.map((conversation, id) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            lastIdx={id === conversations?.length - 1}
          />
        ))}
    </div>
  );
}
