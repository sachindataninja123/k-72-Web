import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StairAnimate from "./components/Animation/StairAnimate.jsx";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StairAnimate>
        <NavContext>
          <App />
        </NavContext>
      </StairAnimate>
    </BrowserRouter>
  </StrictMode>
);
