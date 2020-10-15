import React from "react";
import { MainApp } from "../containers/App";
import { InitialConfig } from "../data";
import { withAuth } from "../utils/withAuth";
import { User } from "../containers/User";
export const AppScreen: React.FC<{}> = withAuth(() => (
  <>
    <User />
    <MainApp initial={InitialConfig} />
  </>
));
