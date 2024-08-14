import React, {
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { MapInteractionCSS } from "react-map-interaction";
import ssrumap from "./../../assets/images/ssru_map.png";
import buildings from "./../../../data/building/buildings";

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
      // console.log("Ref: ", ref);
      // console.log("Focus on building: ", building);

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
    <div className="map-wrapper flex justify-center items-center mx-auto my-4 md:my-2 md:ml-64 w-[80vw] h-[85vh] overflow-hidden bg-white border-4 border-black rounded-lg">
      <MapInteractionCSS value={value} onChange={handleZoomChange}>
        <div className="map-container relative flex justify-center items-center">
          <img
            src={ssrumap}
            alt="ssru map"
            className="map-image max-w-[1529.590px] h-auto"
          />
          {buildings.map((building) => (
            <div
              key={building.number}
              className="marker absolute w-8 h-8 bg-white border-2 border-black rounded-full flex justify-center items-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 text-black text-lg font-bold transition-transform duration-300 ease-in-out hover:scale-150 hover:bg-white/50"
              style={{ left: building.x, top: building.y }}
              onClick={(e) => handleMapClick(building, e)}
            >
              <span className="marker-number">{building.number}</span>
            </div>
          ))}
          {selectedBuilding && (
            <div
              className="marker-popup-container absolute transform -translate-x-1/2 -translate-y-[120%] z-50"
              style={{
                left: `${selectedBuilding.x}px`,
                top: `${selectedBuilding.y}px`,
              }}
            >
              <div
                className="marker-popup relative bg-white border-2 border-black rounded-lg shadow-lg w-56 text-sm leading-6 cursor-pointer"
                ref={popupRef}
              >
                {selectedBuilding.imageurl && (
                  <img
                    src={selectedBuilding.imageurl}
                    alt={`${selectedBuilding.number} building`}
                    className="popup-image w-full h-auto rounded-md mb-2"
                  />
                )}
                <h2 className="m-0 mb-1 text-lg px-4 font-bold">
                  {selectedBuilding.number}
                </h2>
                <h3 className="m-0 mb-2 text-base px-4 font-bold">
                  {selectedBuilding.title}
                </h3>
                <p className="m-0 p-4">{selectedBuilding.content}</p>
                <button
                  className="popup-close absolute top-1.5 right-1.5 w-8 h-8 border-none bg-transparent text-2xl font-bold text-white hover:text-red-500 hover:drop-shadow-[0_2px_2px_rgba(255,0,0,0.5)] transition-colors duration-300"
                  onClick={handleClosePopup}
                >
                  ×
                </button>
              </div>
            </div>
          )}
        </div>
      </MapInteractionCSS>
    </div>
  );
});

export default InteractiveMap;
