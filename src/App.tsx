import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";
import { RootRouter } from "@/screens/";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);
