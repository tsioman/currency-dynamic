import React from "react";
import { App } from "./App";

import { InitialConfig } from "../data";

export default {
  title: "Graph Full App"
};


export const MainApplication: React.FC<{}> = () => (
  <App initial={InitialConfig} />
);
