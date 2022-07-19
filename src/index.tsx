import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
import { withLayout } from "./components/Pages-components/Layout/Layout";
import {AppExp as App} from './App';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <App />
);
