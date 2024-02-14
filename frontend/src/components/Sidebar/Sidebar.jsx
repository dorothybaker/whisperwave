import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";
import { useState } from "react";

export default function Sidebar() {
  const [filter, setFilter] = useState("");
  return (
    <div className="md:flex flex-col sm:px-4 py-4 px-2 border-r border-slate-500 hidden">
      <SearchInput filter={filter} setFilter={setFilter} />
      <div className="px-3 divider" />
      <Conversations filter={filter} />
      <Logout />
    </div>
  );
}
