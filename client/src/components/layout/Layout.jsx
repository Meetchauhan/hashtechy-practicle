import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== "/login" && <Navbar />}
      <Sidebar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
