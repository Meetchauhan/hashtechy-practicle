import { Link } from "react-router-dom";
import useUser from "../../customHooks/useUser";
import Logout from "../logout/Logout";
import { useDispatch } from "react-redux";
import { openSidebar } from "../../features/sidebarSlice";
import useSidebar from "../../customHooks/useSidebar";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useUser();

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <header className="flex items-center justify-between px-2 sm:px-8 py-3 bg-gray-900 text-white shadow-md">
      <div className="font-bold text-2xl tracking-wide">
        <Link
          to="/"
          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 no-underline"
        >
          HashTechy
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <div className="font-medium text-base">
          {user?.data?.firstName} {user?.data?.lastName}
        </div>
        <button
          className=" p-2 rounded hover:bg-gray-800 focus:outline-none"
          onClick={handleOpenSidebar}
          aria-label="Open sidebar"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </header>
  );
};
export default Navbar;
