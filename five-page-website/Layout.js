import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import "./style.css";

const Layout = () => {
  return (
    <div id="container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
