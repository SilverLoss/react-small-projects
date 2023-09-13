import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="df-row"
      style={{
        margin: "10px 10px 50px",
        alignItems: "start",
        justifyContent: "start",
        padding: "2rem 0",
      }}
    >
      <div className="df-col w-25" style={{ gap: "0.5rem" }}>
        <img src="../images/profileImg1.png" alt="Profile Img 1" />
        <p>@2023 copyright All rights reserved.</p>
      </div>
      <div className="df-col w-25" style={{ gap: "0.5rem" }}>
        <h3>Main Menu</h3>
        <ul style={{ listStyle: "none", marginRight: "25px" }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery </Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
          </li>
        </ul>
      </div>
      <div className="df-col w-25" style={{ gap: "0.5rem" }}>
        <h3 style={{ width: "100%", textAlign: "left", marginLeft: "5rem" }}>
          Contact Us
        </h3>
        <div className="df-row" style={{ gap: "1.5rem" }}>
          <h5>E-mail Id</h5>
          <p>contact@gmail.com</p>
        </div>
        <div className="df-row" style={{ gap: "2.2rem" }}>
          <h5>Phone No.</h5>
          <p>+91 1234567890</p>
        </div>
      </div>
      <div
        className="df-col w-25"
        style={{ gap: "0.5rem", textAlign: "justify" }}
      >
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          temporibus, blanditiis soluta omnis unde minima incidunt asperiores
          nulla sit alias possimus pariatur dolorum doloribus quam deserunt quos
          accusamus repudiandae ad esse modi atque inventore reiciendis
          architecto? Illo eveniet eum repudiandae!
        </p>
      </div>
    </div>
  );
};

export default Footer;
