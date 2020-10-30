import React from "react";
import { Currency } from "./Currency";
import { Provider } from "react-redux";
import { store } from "@/store";
export default {
  title: "Currency App",
};

export const CurrencyComponent: React.FC<{}> = () => (
  <Provider store={store}>
    <Currency />
  </Provider>
);
