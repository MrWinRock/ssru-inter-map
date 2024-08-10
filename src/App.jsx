import { useRef } from "react";
import "./App.css";
import Footer from "./presentation/components/footer/Footer";
import InteractiveMap from "./presentation/components/InteractiveMap/InteractiveMap";
import NavBar from "./presentation/components/navbar/NavBar";

function App() {
  const mapRef = useRef(null);

  return (
    <div className="App">
      <h1 className="title">SSRU Interactive Map</h1>
      <NavBar mapRef={mapRef} />
      <div className="interactive-map">
        <InteractiveMap ref={mapRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
