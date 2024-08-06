import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleNavbar = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="navbar-wrapper">
      <div className={`navbar-container ${isOn ? "active" : ""}`}>
        <div className="navbar-logo">
          <img src="/" alt="Logo" />
        </div>
        <label className="burger" htmlFor="burger">
          <input type="checkbox" id="burger" onClick={toggleNavbar} />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
