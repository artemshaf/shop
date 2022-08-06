import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { AppExp as App } from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);
