import React from "react";
import { render } from "react-dom";
import { App } from "./containers/AppRouter";

import { ErrorBoundary } from "./components/ErrorBoundary";

render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
  document.getElementById("root")
);
