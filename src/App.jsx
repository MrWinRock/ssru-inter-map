import "./App.css";
import InteractiveMap from "./presentation/components/InteractiveMap/InteractiveMap";
import NavBar from "./presentation/components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <h1 className="title">SSRU Interactive Map</h1>
      <NavBar />
      <InteractiveMap />
    </div>
  );
}

export default App;
