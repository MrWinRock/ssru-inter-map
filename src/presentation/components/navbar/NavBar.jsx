import React, { useState, useEffect, useCallback, useRef } from "react";
import buildings from "./../../../data/building/buildings";
import logo from "./../../assets/images/logo.png";

import { Offcanvas, Button } from "react-bootstrap";
import "./NavBar.css";

const NavBar = ({ mapRef }) => {
  const [show, setShow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const offcanvasRef = useRef(null);

  const toggleNavbar = () => {
    setShow(!show);
  };

  const handleShowNavbar = () => {
    setShow(true);
  };

  const handleCloseNavbar = useCallback(() => {
    setShow(false);
  }, []);

  const handleAreaButtonClick = (id) => {
    handleShowNavbar();
    setSelectedId(id);
  };

  const handleButtonClick = (buildingNumber) => {
    const building = buildings.find((b) => b.number === buildingNumber);

    if (building && mapRef.current) {
      mapRef.current.focusOnBuilding(building);
    }
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
      <div className="fixed-left d-flex align-items-center p-3">
        <div className="header-container">
          <img src={logo} alt="Logo" className="logo" />
          <span className="devider"></span>
          <Button
            variant="link"
            className="hamburger-btn"
            onClick={toggleNavbar}
          >
            <div className={`hamburger ${show ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </Button>
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
              อาคาร
            </h1>
          </Offcanvas.Header>
          <span className="devider"></span>
          <Offcanvas.Body className="canvas-body">
            {[...new Set(buildings.map((building) => building.id))].map(
              (id) => (
                <div key={id} className="w-100 mb-2">
                  <Button
                    variant="primary"
                    className="area-button w-100 mb-2"
                    style={{ background: "#222" }}
                    onClick={() => handleAreaButtonClick(id)}
                  >
                    เขตพื้นที่ {id}
                  </Button>
                  {selectedId === id && (
                    <div>
                      {buildings
                        .filter((building) => building.id === id)
                        .map((building) => (
                          <Button
                            key={building.number}
                            variant="secondary"
                            className="building-button w-30 m-2"
                            style={{ background: "#444" }}
                            onClick={() => handleButtonClick(building.number)}
                          >
                            อาคาร <strong>{building.number}</strong>
                          </Button>
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
