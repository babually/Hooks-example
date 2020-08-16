import React from "react";
import ReactDOM from "react-dom";

import HookCounter from "./HookCounter";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <HookCounter />
  </React.StrictMode>,
  rootElement
);
