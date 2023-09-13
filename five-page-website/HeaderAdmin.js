import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <div style={{ height: "100px" }}>
      <nav
        className="df-row"
        style={{ justifyContent: "space-between", margin: "0px 10px" }}
      >
        <div>
          <img src="../images/profileImg1.png" alt="Logo" className="logo" />
        </div>
        <div className="df-row" style={{ gap: "3rem", marginRight: "50px" }}>
          <Link to="/admin">Home</Link>
          <Link to="/admin/service">Service</Link>
          <Link to="/admin/about">About</Link>
          <Link to="/admin/gallery">Gallery </Link>
          <Link to="/admin/contact">Contact </Link>
          <p>Welcome Admin</p>
          <Link to="/">Sign Out</Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderAdmin;
