import React from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Outlet } from "react-router-dom";
import FooterAdmin from "./FooterAdmin";
import "./style.css";

const LayoutAdmin = () => {
  return (
    <div id="container">
      <HeaderAdmin />
      <Outlet />
      <FooterAdmin />
    </div>
  );
};

export default LayoutAdmin;
