import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

export default function Logout() {
  const { logout } = useLogout();

  return (
    <div
      className="flex gap-2 mt-auto text-sm pt-1 items-center text-white font-semibold cursor-pointer"
      onClick={logout}
    >
      <BiLogOut size={20} />
      <span>LOGOUT!</span>
    </div>
  );
}
