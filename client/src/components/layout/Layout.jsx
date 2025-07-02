import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/Footer";
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
