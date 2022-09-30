import React from "react";
import ReactDOM from "react-dom/client";
import Global from "./styles/Global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div>a</div>
    <Global />
  </React.StrictMode>
);
