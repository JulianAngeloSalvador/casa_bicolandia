import React from "react";
import "./Navbar.css";
import logo from "../../../public/assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>Product</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact Us</li>
      </ul>
      <ul>
        <li>Sign up</li>
        <li className="btn">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
