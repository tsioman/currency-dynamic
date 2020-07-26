import React from "react";
import { render } from "react-dom";
import { InitialConfig } from "./data";
import { App } from "./containers/App";

render(
  <App initial={InitialConfig} />,
  document.getElementById("root")
);
