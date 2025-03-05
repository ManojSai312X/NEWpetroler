import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import App from "./App";
import "./index.css";
import "./App.css";

// Get the root element from your HTML file
const rootElement = document.getElementById("root");

// Create a root for your app
const root = createRoot(rootElement);

// Render your app inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
