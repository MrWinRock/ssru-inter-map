import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './language/i18n';

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);