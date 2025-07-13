import {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ssrumap from "./../../assets/images/ssru_map.png";
import buildings from "./../../../data/building/buildings";

import { Card } from "react-bootstrap";
import "./InteractiveMap.css";

const InteractiveMap = forwardRef((props, ref) => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [mapReady, setMapReady] = useState(false);
  const transformRef = useRef(null);
  const mapWrapperRef = useRef(null);

  const initialScale = 0.7;
  const initialPositionX = 50;
  const initialPositionY = 1500;

  const CENTER_X = 757.31;
  const CENTER_Y = 2157.93;

  const MIN_ZOOM = 0.5;
  const MAX_ZOOM = 2.5;

  const IMAGE_WIDTH = 1542;
  const IMAGE_HEIGHT = 3813;

  const handleMapClick = (marker, event) => {
    event.stopPropagation();
    setSelectedBuilding(marker);
  };

  const handleClosePopup = () => {
    setSelectedBuilding(null);
  };

  useImperativeHandle(ref, () => ({
    focusOnBuilding(building) {
      const attemptFocus = () => {
        if (transformRef.current && mapWrapperRef.current) {
          const positionX = CENTER_X - building.x;
          const positionY = CENTER_Y - building.y;

          console.log("Calculated transform:", { positionX, positionY });

          transformRef.current.setTransform(positionX, positionY, 1, 300);
          setSelectedBuilding(building);
        } else {
          console.warn("Transform/mapWrapper ref not ready yet.");
        }
      };

      if (!mapReady) {
        const interval = setInterval(() => {
          if (mapReady) {
            clearInterval(interval);
            requestAnimationFrame(attemptFocus);
          }
        }, 50);
      } else {
        requestAnimationFrame(attemptFocus);
      }
    },
  }));

  const handleTransformed = (_, state) => {
    console.log("TRANSFORMED STATE:", state);
  };

  const getTransformBounds = ({ scale }) => {
    const viewportWidth = mapWrapperRef.current?.clientWidth || window.innerWidth;
    const viewportHeight = mapWrapperRef.current?.clientHeight || window.innerHeight;

    const scaledImageWidth = IMAGE_WIDTH * scale;
    const scaledImageHeight = IMAGE_HEIGHT * scale;

    const xBound = Math.max(0, scaledImageWidth - viewportWidth * 0.1)
    const yBound = Math.max(0, scaledImageHeight - viewportHeight * 0.1);

    return {
      xMin: -xBound,
      xMax: xBound,
      yMin: -yBound,
      yMax: yBound
    };
  };

  const resetPosition = () => {
    if (transformRef.current) {
      transformRef.current.setTransform(initialPositionX, initialPositionY, initialScale, 300);
    }
  };

  return (
    <div className="map-wrapper" ref={mapWrapperRef}>
      <button className="reset-button" onClick={resetPosition}>
        Reset
      </button>
      <TransformWrapper
        onInit={(api) => {
          console.log("Transform API initialized", api);
          transformRef.current = api;
        }}
        initialScale={initialScale}
        initialPositionX={initialPositionX}
        initialPositionY={initialPositionY}
        minScale={MIN_ZOOM}
        maxScale={MAX_ZOOM}
        wheel={{ step: 0.1 }}
        pinch={{ step: 5 }}
        doubleClick={{ disabled: true }}
        limitToBounds={false}
        centerOnInit={false}
        onTransformed={handleTransformed}
        bounds={getTransformBounds}
        smooth={true}
      >
        <TransformComponent>
          <div className="map-container">
            <img
              src={ssrumap}
              alt="ssru campus map"
              className="map-image"
              onLoad={() => setMapReady(true)}
            />

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
                <Card className="card marker-popup">
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
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
});

InteractiveMap.displayName = "InteractiveMap";

export default InteractiveMap;