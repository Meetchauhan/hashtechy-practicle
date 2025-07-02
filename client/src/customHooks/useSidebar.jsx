import { useSelector } from "react-redux";

const useSidebar = () => {
  const isSidebarOpen = useSelector((state) => state?.sidebar?.isOpen);
  return isSidebarOpen;
};

export default useSidebar;
