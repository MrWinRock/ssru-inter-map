import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import Footer from "./presentation/components/footer/Footer";
import InteractiveMap from "./presentation/components/InteractiveMap/InteractiveMap";
import NavBar from "./presentation/components/navbar/NavBar";
import LanguageSelector from "./presentation/components/selector/LanguageSelector";

function App() {
  const mapRef = useRef(null);
  const { t } = useTranslation();

  return (
    <div className="container-fluid p-0 m-0">
      <LanguageSelector />
      <h1 className="main-title display-4 font-weight-bold text-center pt-1 z-index-100">
        {t('title')}
      </h1>
      <NavBar mapRef={mapRef} />
      <div className="interactive-map">
        <InteractiveMap ref={mapRef} />
      </div>
      <Footer />
    </div>
  );
}

export default App;