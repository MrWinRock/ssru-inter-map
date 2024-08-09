import "./App.css";
import Footer from "./presentation/components/footer/Footer";
import InteractiveMap from "./presentation/components/InteractiveMap/InteractiveMap";
import NavBar from "./presentation/components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <h1 className="title">SSRU Interactive Map</h1>
      <NavBar />
      <div className="interactive-map">
        <InteractiveMap />
      </div>
      <Footer />
    </div>
  );
}

export default App;
