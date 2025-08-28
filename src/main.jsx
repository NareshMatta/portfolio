import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom"; // 👈 add this
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>   {/* 👈 Wrap App inside Router */}
      <App />
    </Router>
  </StrictMode>
);
