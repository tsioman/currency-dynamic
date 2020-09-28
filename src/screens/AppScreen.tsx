import React from "react";
import { App } from "../containers/App";
import { InitialConfig } from "../data";
import { withAuth } from "../utils/withAuth";
export const AppScreen: React.FC<{}> = withAuth(() => (
  <App initial={InitialConfig} />
));
