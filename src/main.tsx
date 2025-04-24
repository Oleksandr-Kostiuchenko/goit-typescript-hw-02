//* React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//* Components & provider
import "./index.css";
import App from "./App.jsx";
import LangProvider from "./context/lang.jsx";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <LangProvider>
      <App />
    </LangProvider>
  </StrictMode>
);
