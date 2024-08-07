import React, { useState } from "react";
import buildings from "./../../../data/building/buildings";
import logo from "./../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`navbar-wrapper ${isOpen ? "active" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="navbar-logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="navbar-toggle" onClick={toggleNavbar}>
            <span className="navbar-toggle-icon"></span>
            <span className="navbar-toggle-icon"></span>
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
        <div className="navbar-menu">
          {buildings.map((building) => (
            <button key={building.number} className="navbar-menu-item">
              {building.number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
