import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import { useNavigate } from "react-router-dom";
import { closeSidebar } from "../../features/sidebarSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(closeSidebar());
    dispatch(logout());
    navigate("/login", { replace: true });
  };
  return (
    <div className="">
      <button
        className=" cursor-pointer hover:text-cyan-400 transition-colors duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};
export default Logout;
