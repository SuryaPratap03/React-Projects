import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { FoodRecipeContextProvider } from "./components/context/FoodRecipeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <FoodRecipeContextProvider>
        <App />
      </FoodRecipeContextProvider>
    </BrowserRouter>
  </StrictMode>
);
