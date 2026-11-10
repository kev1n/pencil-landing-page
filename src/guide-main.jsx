import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import "./guide.css";
import UserGuide from "./UserGuide.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode><UserGuide /></StrictMode>
);
