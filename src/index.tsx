import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/Global";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Global />
  </React.StrictMode>
);
