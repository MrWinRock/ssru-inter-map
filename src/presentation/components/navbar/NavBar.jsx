import React, { useState } from "react";
import buildings from "./../../../data/building/buildings";
import logo from "./../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = ({ onLocateAndClickSpot }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleLocateClick = (building) => {
    if (typeof onLocateAndClickSpot === "function") {
      onLocateAndClickSpot(building);
    } else {
      console.error("onLocateAndClickSpot is not a function");
    }
    setIsOpen(false);
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
            <button
              key={building.number}
              className="navbar-menu-item"
              onClick={() => handleLocateClick(building)}
            >
              {building.number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
