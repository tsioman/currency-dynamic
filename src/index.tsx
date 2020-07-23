import React from "react";
import { render } from "react-dom";

import { App } from "./containers/App";
import { DataSet } from "./data";

render(<App data={DataSet} />, document.getElementById("root"));
