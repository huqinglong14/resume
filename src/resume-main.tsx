import React from "react";
import ReactDOM from "react-dom/client";
import ResumePage from "./resume-page";
import "./resume-page.css";

ReactDOM.createRoot(document.getElementById("resume-root")!).render(
  <React.StrictMode>
    <ResumePage />
  </React.StrictMode>,
);
