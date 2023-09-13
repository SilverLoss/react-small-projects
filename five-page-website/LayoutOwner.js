import React from "react";
import HeaderOwner from "./HeaderOwner";
import FooterOwner from "./FooterOwner";
import { Outlet } from "react-router-dom";
import "./style.css";

const LayoutOwner = () => {
  return (
    <div id="container">
      <HeaderOwner />
      <Outlet />
      <FooterOwner />
    </div>
  );
};

export default LayoutOwner;
