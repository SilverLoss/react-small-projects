import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery </Link>
          <Link to="/contact">Contact </Link>
          <Link to="/admin">Login Admin</Link>
          <Link to="/subadmin">Login Subadmin</Link>
          <Link to="/owner">Login Owner</Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
