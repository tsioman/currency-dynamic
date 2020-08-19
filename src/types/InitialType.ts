import {
  GraphDataType,
  ColorSetType,
  AreaType,
  CurrencyAvaiableType,
} from "../types/";

export type InitialConfigType = {
  color: ColorSetType;
  graph: GraphDataType;
  buttons: {
    value: CurrencyAvaiableType;
    color: ColorSetType;
  }[];
  area: AreaType;
  currency: CurrencyAvaiableType;
};
