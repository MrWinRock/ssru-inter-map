import { useRef } from "react";
import Footer from "./presentation/components/footer/Footer";
import InteractiveMap from "./presentation/components/InteractiveMap/InteractiveMap";
import NavBar from "./presentation/components/navbar/NavBar";

function App() {
  const mapRef = useRef(null);

  return (
    <div className="container">
      <h1 className="display-4 font-weight-bold">SSRU Interactive Map</h1>
      <NavBar mapRef={mapRef} />
      <div className="interactive-map">
        <InteractiveMap ref={mapRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
