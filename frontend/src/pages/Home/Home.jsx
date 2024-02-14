import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex rounded-lg overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-lg sm:h-[450px] md:h-[550px] h-[97vh] md:w-max w-full">
      <Sidebar />

      <MessageContainer />
    </div>
  );
}
