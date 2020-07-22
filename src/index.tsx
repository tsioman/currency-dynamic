import React from "react";
import { render } from "react-dom";

import { Graph } from "./containers/Graph";
import { DataSet } from "./data"

render(<Graph data={DataSet} />, document.getElementById("root"));
