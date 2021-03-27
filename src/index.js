import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/*
 * ReactDOM.render() injeta um componente (1) em um elemente HTML (2)
 */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
