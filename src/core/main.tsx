import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "../core/App.tsx";
import "../core/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
