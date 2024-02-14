import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import Logout from "./Logout";
import { useState } from "react";

export default function MobileSidebar() {
  const [filter, setFilter] = useState("");
  return (
    <div className="flex flex-col w-full relative">
      <div className="flex-1 sticky top-0 bg-base-100 py-1.5 z-50">
        <SearchInput filter={filter} setFilter={setFilter} />
      </div>
      <div className="flex-col flex overflow-auto flex-auto">
        <Conversations filter={filter} />
      </div>
      <div className="flex mt-auto flex-1 sticky bottom-0 bg-base-100 z-50 p-2 justify-between items-center">
        <div>
          <Logout />
        </div>
        <div className="modal-action p-0 m-0">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="p-2 px-2.5 text-sm font-semibold bg-base-300 rounded-lg">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
