import React, { useState, useRef } from "react";
import { MapInteractionCSS } from "react-map-interaction";
import ssrumap from "./../../assets/images/ssru_map.png";
import buildings from "./../../../data/building/buildings";
import "./InteractiveMap.css";

const InteractiveMap = () => {
  const [value, setValue] = useState({
    scale: 1,
    translation: { x: 80, y: 10 },
  });

  const [selectedBuilding, setSelectedBuilding] = useState(null);

  const popupRef = useRef(null);

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 2.5;

  const handleMapClick = (marker, event) => {
    event.stopPropagation();
    setSelectedBuilding(marker);
  };

  const handleClosePopup = () => {
    setSelectedBuilding(null);
  };

  const handleZoomChange = (newValue) => {
    setValue({
      ...newValue,
      scale: Math.min(Math.max(newValue.scale, MIN_ZOOM), MAX_ZOOM),
    });
  };

  return (
    <div className="map-wrapper">
      <MapInteractionCSS value={value} onChange={handleZoomChange}>
        <div className="map-container">
          <img src={ssrumap} alt="ssru map" className="map-image" />
          {buildings.map((building) => (
            <div
              key={building.number}
              className="marker"
              style={{ left: building.x, top: building.y }}
              onClick={(e) => handleMapClick(building, e)}
            >
              <span className="marker-number">{building.number}</span>
            </div>
          ))}
          {selectedBuilding && (
            <div
              className="marker-popup-container"
              style={{
                left: `${selectedBuilding.x}px`,
                top: `${selectedBuilding.y}px`,
              }}
            >
              <div className="marker-popup" ref={popupRef}>
                {selectedBuilding.imageurl && (
                  <img
                    src={selectedBuilding.imageurl}
                    alt={`${selectedBuilding.number} building`}
                    className="popup-image"
                  />
                )}
                <h2>{selectedBuilding.number}</h2>
                <h3>{selectedBuilding.title}</h3>
                <p>{selectedBuilding.content}</p>
                <button className="popup-close" onClick={handleClosePopup}>
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </MapInteractionCSS>
    </div>
  );
};

export default InteractiveMap;
