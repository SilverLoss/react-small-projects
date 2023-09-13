import React from 'react'
import { Link } from "react-router-dom";

const HeaderOwner = () => {
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
          <Link to="/owner">Home</Link>
          <Link to="/owner/service">Service</Link>
          <Link to="/owner/about">About</Link>
          <Link to="/owner/gallery">Gallery </Link>
          <Link to="/owner/contact">Contact </Link>
          <p>Welcome Owner</p>
          <Link to="/">Sign Out</Link>
        </div>
      </nav>
    </div>
  )
}

export default HeaderOwner
