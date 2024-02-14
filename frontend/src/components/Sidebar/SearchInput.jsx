import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput({ filter, setFilter }) {
  return (
    <div className="join w-full">
      <input
        className="input input-bordered join-item w-full outline-none"
        placeholder="Search users"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <button className="btn join-item rounded-r-full border-none bg-sky-500">
        <IoSearchSharp size={23} />
      </button>
    </div>
  );
}
