import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { DarkModeProvider } from "./context/dark-mode";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <DarkModeProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </DarkModeProvider>
);
