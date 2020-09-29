import React from "react";
import { App } from "../containers/App";
import { InitialConfig } from "../data";
import { withAuth } from "../utils/withAuth";
import {User} from "../containers/User";
export const AppScreen: React.FC<{}> = withAuth(() => (
  <>
    <User/>
    <App initial={InitialConfig} />
  </>
));
