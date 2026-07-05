import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import.meta.env.MODE;
import.meta.env.DEV;
import.meta.env.PROD;
import.meta.env.VITE_SOME_VALUE;

createRoot(document.getElementById("root")).render(<App />);
