import React from "react";
import { render } from "react-dom";
import { AppRouter } from "./containers/AppRouter";
import { ErrorBoundary } from "./components/ErrorBoundary";

const App = () => (
  <ErrorBoundary>
    <AppRouter />
  </ErrorBoundary>
);
render(<App />, document.getElementById("root"));
