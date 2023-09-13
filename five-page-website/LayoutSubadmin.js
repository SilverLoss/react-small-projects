import React from "react";
import HeaderSubadmin from "./HeaderSubadmin";
import { Outlet } from "react-router-dom";
import FooterSubadmin from "./FooterSubadmin";
import "./style.css";

const LayoutSubadmin = () => {
  return (
    <div id="container">
      <HeaderSubadmin />
      <Outlet />
      <FooterSubadmin />
    </div>
  );
};

export default LayoutSubadmin;
