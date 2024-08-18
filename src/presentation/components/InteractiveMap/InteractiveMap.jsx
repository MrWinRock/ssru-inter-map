import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { MapInteractionCSS } from "react-map-interaction";
import ssrumap from "./../../assets/images/ssru_map.png";
import buildings from "./../../../data/building/buildings";

import { Card } from "react-bootstrap";
import "./InteractiveMap.css";

const InteractiveMap = forwardRef((props, ref) => {
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

  useImperativeHandle(ref, () => ({
    focusOnBuilding(building) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const translationX = viewportWidth / 2 - building.x;
      const translationY = viewportHeight / 2 - building.y;

      setValue({
        ...value,
        scale: 1,
        translation: { x: translationX, y: translationY },
      });
      setSelectedBuilding(building);
    },
  }));

  return (
    <div className="map-wrapper ">
      <MapInteractionCSS
        value={value}
        onChange={handleZoomChange}
        minScale={MIN_ZOOM}
        maxScale={MAX_ZOOM}
      >
        <div className="map-container ">
          <img src={ssrumap} alt="ssru map" className="map-image " />
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
              className="marker-popup-container "
              style={{
                left: `${selectedBuilding.x}px`,
                top: `${selectedBuilding.y}px`,
              }}
            >
              <Card className="card marker-popup " ref={popupRef}>
                {selectedBuilding.imageurl && (
                  <Card.Img
                    variant="top"
                    src={selectedBuilding.imageurl}
                    alt={`${selectedBuilding.number} building`}
                    className="card-img-top popup-image"
                  />
                )}
                <Card.Body className="card-body">
                  <Card.Title className="card-title mb-3">
                    อาคาร {selectedBuilding.number}
                  </Card.Title>
                  <Card.Subtitle className="card-subtitle mb-2">
                    {selectedBuilding.title}
                  </Card.Subtitle>
                  <Card.Text className="card-text mb-1">
                    {selectedBuilding.content}
                  </Card.Text>
                  <button className="popup-close" onClick={handleClosePopup}>
                    &#10006;
                  </button>
                </Card.Body>
              </Card>
            </div>
          )}
        </div>
      </MapInteractionCSS>
    </div>
  );
});

export default InteractiveMap;
