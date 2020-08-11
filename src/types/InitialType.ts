import { GraphDataType, ColorSetType, AreaType, CurrencyAvaiableType } from "../types/";

export type InitialConfigType = {
  color: ColorSetType;
  graph: GraphDataType;
  colorSet: ColorSetType[];
  area: AreaType;
  currency: CurrencyAvaiableType;
};
