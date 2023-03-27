import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="nav">
          <ul className="subContainer">
            <li>
              <a href="#">Order</a>
            </li>
            <li>
              <a href="#">Order Review</a>
            </li>
            <li>
              <a href="#">Manage Inventory</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
