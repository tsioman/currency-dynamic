import React from "react";
import { render } from "react-dom";
import { InitialConfig } from "./data";
import { App } from "./containers/App";
import { ErrorBoundary } from "./components/ErrorBoundary";

render(
  <ErrorBoundary>
    <App initial={InitialConfig} />
  </ErrorBoundary>,
  document.getElementById("root")
);
