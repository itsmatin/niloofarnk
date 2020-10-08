import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./scripts/App";
import * as serviceWorker from "./serviceWorker";
import "./stylesheets/main.scss";
import "overlayscrollbars/css/OverlayScrollbars.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
