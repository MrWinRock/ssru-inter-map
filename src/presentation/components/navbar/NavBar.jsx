import React, { useState, useEffect, useRef, useCallback } from "react";
import buildings from "./../../../data/building/buildings";
import logo from "./../../assets/images/logo.png";

const NavBar = ({ mapRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
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

  const handleAreaButtonClick = (id) => {
    openNavbar();
    setSelectedId(id);
    setIsVisible(true);
  };

  const handleButtonClick = (buildingNumber) => {
    const building = buildings.find((b) => b.number === buildingNumber);

    if (building && mapRef.current) {
      mapRef.current.focusOnBuilding(building);
    }
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

  const handleTransitionEnd = () => {
    if (!isOpen || selectedId === null) {
      setIsVisible(false);
    }
  };

  const uniqueBuildingIds = new Set();
  buildings.forEach((building) => {
    uniqueBuildingIds.add(building.id);
  });

  return (
    <div
      ref={navbarRef}
      className={`navbar-wrapper fixed top-0 left-0 h-screen ${
        isOpen ? "w-[13%]" : "w-[8%]"
      } overflow-hidden z-[1000] transition-all duration-[600ms] ease`}
    >
      <div className="navbar-container h-full bg-[#333] text-white overflow-auto">
        <div className=".navbar-header block relative p-5 border-b border-[#444]">
          <div className="navbar-logo p-3">
            <img src={logo} alt="Logo" className="w-[45px] py-[15px]" />
          </div>
          <button
            className="navbar-toggle bg-transparent border-none cursor-pointer flex flex-col justify-center items-center"
            onClick={toggleNavbar}
          >
            <span
              className={`w-8 h-1 bg-white rounded-md mb-1.5 transition-transform duration-[300ms] ease ${
                isOpen ? "translate-y-[10px] rotate-45" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-white rounded-md mb-1.5 transition-opacity duration-[300ms] ease ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-8 h-1 bg-white rounded-md transition-transform duration-[300ms] ease ${
                isOpen ? "-translate-y-[10px] -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        <div className="navbar-menu p-5">
          {[...uniqueBuildingIds].map((id) => (
            <div key={id} className="navbar-menu-wrapper mb-2">
              <button
                className="navbar-menu-item w-full bg-[#444] border-none text-white p-3 mb-2 text-center cursor-pointer rounded-md hover:bg-[#555] transition-all duration-[300ms] ease"
                onClick={() => handleAreaButtonClick(id)}
              >
                เขตพื้นที่ {id}
              </button>
              {isVisible && selectedId === id && (
                <div
                  className={`navbar-menu-item-content ${
                    isOpen && selectedId === id
                      ? "relative visible opacity-100 max-h-screen"
                      : "absolute invisible opacity-0 max-h-0"
                  } bg-[#222] border-none text-white p-3 mx-2 rounded-lg transition-all duration-[500ms] ease-in-out overflow-hidden`}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {buildings
                    .filter((building) => building.id === id)
                    .map((building) => (
                      <button
                        key={building.number}
                        className="navbar-menu-item-content-item w-full p-3 mb-2 text-center text-white bg-[#444] border-none rounded-md cursor-pointer hover:bg-[#555] transition-all duration-[300ms] ease"
                        onClick={() => handleButtonClick(building.number)}
                      >
                        อาคาร {building.number}
                      </button>
                    ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
