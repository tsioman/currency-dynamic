import React from "react";
import { Currency } from "./Currency";

import { InitialConfig } from "@/data";

export default {
  title: "Currency App",
};

export const CurrencyApp: React.FC<{}> = () => (
  <Currency initial={InitialConfig} />
);
