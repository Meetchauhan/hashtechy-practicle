import { Link } from "react-router-dom";
import useSidebar from "../../customHooks/useSidebar";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../../features/sidebarSlice";
import Logout from "../logout/Logout";
import useCartProduct from "../../customHooks/useCartProduct";

const Sidebar = () => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSidebar();
  const cartData = useCartProduct();
  const cartLength = cartData?.data?.length;
  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };
  // Height of navbar is assumed to be 64px (h-16). Adjust if your navbar height is different.
  return (
    <div
      className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 bg-gray-900 text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}
        `}
    >
      {/* Close Button */}
      <button
        className="absolute top-4 right-4 p-2 rounded hover:bg-gray-800 focus:outline-none"
        onClick={handleCloseSidebar}
        aria-label="Close sidebar"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <ul className="mt-20 flex flex-col gap-6 px-8">
        <li>
          <Link
            to="/"
            className="hover:text-cyan-400 transition-colors duration-200"
            onClick={handleCloseSidebar}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/cart"
            className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-2"
            onClick={handleCloseSidebar}
          >
            Cart
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-cyan-500 rounded-full">
              {cartLength || 0}
            </span>
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
