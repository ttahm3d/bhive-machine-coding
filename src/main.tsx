import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BhiveSpacesProvder } from "./context/BhiveSpaces/provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BhiveSpacesProvder>
      <App />
    </BhiveSpacesProvder>
  </StrictMode>
);
