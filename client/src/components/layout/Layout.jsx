import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // Hide Navbar on /login and 404 (not found) page
  const hideNavbar = pathname === "/login" || pathname === "/not-found";
  return (
    <>
      {!hideNavbar && <Navbar />}
      <Sidebar />
      <main>{children}</main>
    </>
  );
};
export default Layout;
