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
  const transformRef = useRef(null);
  const mapWrapperRef = useRef(null);

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
      if (transformRef.current) {
        const viewportWidth = mapWrapperRef.current?.clientWidth || window.innerWidth;
        const viewportHeight = mapWrapperRef.current?.clientHeight || window.innerHeight;

        const translationX = viewportWidth / 2 - building.x;
        const translationY = viewportHeight / 2 - building.y;

        transformRef.current.setTransform(translationX, translationY, 1, 300);
        setSelectedBuilding(building);
      }
    },
  }));

  const handleTransformed = (ref, state) => {
    console.log('Transform state:', state);
  };

  const getTransformBounds = (scale) => {
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
      transformRef.current.setTransform(0, 0, 1, 300);
    }
  };

  return (
    <div className="map-wrapper" ref={mapWrapperRef}>
      <TransformWrapper
        ref={transformRef}
        initialScale={1}
        initialPositionX={100}
        initialPositionY={0}
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
        <button className="reset-button" onClick={resetPosition}>
          Reset
        </button>
        <TransformComponent>
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