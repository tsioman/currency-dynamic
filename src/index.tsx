import React from "react";
import { render } from "react-dom";
import { ClickCounter } from "./ClickCounter";

const App = () => <div><ClickCounter /></div>;
render(<App />, document.getElementById("root"));
