import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import ReactGA from "react-ga4";
import { SpeedInsights } from "@vercel/speed-insights/react"

ReactGA.initialize("G-2HZ45QEFQ5");




// Here the App component is being rendered in the browser and we have most of the functionality in the App component

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


