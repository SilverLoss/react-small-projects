import React from "react";
import { Link } from "react-router-dom";

const HeaderSubadmin = () => {
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
          <Link to="/subadmin">Home</Link>
          <Link to="/subadmin/service">Service</Link>
          <Link to="/subadmin/about">About</Link>
          <Link to="/subadmin/gallery">Gallery </Link>
          <Link to="/subadmin/contact">Contact </Link>
          <p>Welcome Sub-Admin</p>
          <Link to="/">Sign Out</Link>
        </div>
      </nav>
    </div>
  );
};

export default HeaderSubadmin;
