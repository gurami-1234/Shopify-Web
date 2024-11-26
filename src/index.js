import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import ThemeContextComponent from "contexts/ThemeContext/ThemeContext";
import AuthModalContextComponent from "contexts/AuthModalContext/AuthModalContext";
import IsAuthContextComponent from "contexts/IsAuthContext/IsAuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <IsAuthContextComponent>
        <ThemeContextComponent>
          <AuthModalContextComponent>
            <App />
          </AuthModalContextComponent>
        </ThemeContextComponent>
      </IsAuthContextComponent>
    </Router>
  </React.StrictMode>
);
