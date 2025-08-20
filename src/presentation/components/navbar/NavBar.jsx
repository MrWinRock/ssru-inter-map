import { useState, useEffect, useCallback, useRef } from "react";
import { useTranslation } from 'react-i18next';
import buildings from "./../../../data/building/buildings";
import logo from "./../../assets/images/logo.png";
import LanguageSelector from "../selector/LanguageSelector";

import { Offcanvas, Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = ({ mapRef }) => {
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const offcanvasRef = useRef(null);

  const toggleNavbar = () => {
    setShow(!show);
  };

  const toggleBuilding = (id) => {
    setSelectedId(selectedId === id ? null : id);
  };

  const handleCloseNavbar = useCallback(() => {
    setShow(false);
  }, []);

  const handleAreaButtonClick = (id) => {
    toggleBuilding(id);
  };

  const handleButtonClick = (buildingNumber) => {
    const building = buildings.find((b) => b.number === buildingNumber);

    if (building && mapRef.current) {
      mapRef.current.focusOnBuilding(building);
    } else {
      console.error("Building not found or mapRef is null");
    }

    setShow(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        offcanvasRef.current &&
        !offcanvasRef.current.contains(event.target) &&
        !event.target.closest(".fixed-left") &&
        !event.target.closest(".navbar-offcanvas")
      ) {
        handleCloseNavbar();
      }
    };

    if (show) {
      document.addEventListener("mousedown", handleDocumentClick);
    } else {
      document.removeEventListener("mousedown", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDocumentClick);
    };
  }, [show, handleCloseNavbar]);

  return (
    <>
      <div className="fixed-left d-flex align-items-center">
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="devider"></span>
          <LanguageSelector />
          <button
            type="button"
            className="hamburger-btn"
            onClick={toggleNavbar}
          >
            <div className={`hamburger ${show ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>

      <div ref={offcanvasRef}>

        <Offcanvas
          show={show}
          onHide={handleCloseNavbar}
          placement="start"
          scroll={true}
          backdrop={false}
          className="navbar-offcanvas p-3"
        >
          <Offcanvas.Header className="canvas-header">
            <h1 className="display-5 font-weight-bold text-center z-index-100">
              {t('buildings')}
            </h1>
          </Offcanvas.Header>
          <span className="devider"></span>
          <Offcanvas.Body className="canvas-body">

            {[...new Set(buildings.map((building) => building.id))].map(
              (id) => (
                <div key={id} className="w-100 mb-2">
                  <button
                    className={`area-button w-100 mb-2 ${selectedId === id ? "active" : ""}`}
                    onClick={() => handleAreaButtonClick(id)}
                  >
                    {t('area')} {id}
                  </button>
                  {selectedId === id && (
                    <div className="building-button-container">
                      {buildings
                        .filter((building) => building.id === id)
                        .map((building) => (
                          <button
                            key={building.number}
                            className="building-button"
                            onClick={() => handleButtonClick(building.number)}
                          >
                            {t('building')} {building.number}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              )
            )}
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </>
  );
};

export default NavBar;