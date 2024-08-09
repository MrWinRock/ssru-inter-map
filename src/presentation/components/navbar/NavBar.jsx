import React, { useState, useEffect, useRef, useCallback } from "react";
import buildings from "./../../../data/building/buildings";
import logo from "./../../assets/images/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const navbarRef = useRef(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const openNavbar = () => {
    setIsOpen(true);
  };

  const closeNavbar = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleButtonClick = (id) => {
    openNavbar();
    setSelectedId(id);
    console.log(`Selected ID: ${id}`); // Debugging line
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        closeNavbar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeNavbar]);

  const uniqueBuildingIds = new Set();
  buildings.forEach((building) => {
    uniqueBuildingIds.add(building.id);
  });

  return (
    <div ref={navbarRef} className={`navbar-wrapper ${isOpen ? "active" : ""}`}>
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
          {[...uniqueBuildingIds].map((id) => (
            <div key={id} className="navbar-menu-item-wrapper">
              <button
                className="navbar-menu-item"
                onClick={() => handleButtonClick(id)}
              >
                เขตพื้นที่ {id}
              </button>
              <div
                className={`navbar-menu-item-content ${
                  selectedId === id ? "show" : ""
                }`}
              >
                {buildings
                  .filter((building) => building.id === id)
                  .map((building) => (
                    <button
                      key={building.number}
                      className="navbar-menu-item-content-item"
                    >
                      อาคาร {building.number}
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
