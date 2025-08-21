import { useRef } from "react";
import InteractiveMap from "./presentation/components/InteractiveMap/InteractiveMap";
import NavBar from "./presentation/components/navbar/NavBar";

function App() {
  const mapRef = useRef(null);

  return (
    <div className="container-fluid p-0 m-0">
      <NavBar mapRef={mapRef} />
      <div className="interactive-map">
        <InteractiveMap ref={mapRef} />
      </div>
    </div>
  );
}

export default App;