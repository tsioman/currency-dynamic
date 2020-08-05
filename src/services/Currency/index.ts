import { GraphDataType } from "../../types";
import { http } from "../../api/index";

export type currencyAvaiableType = "RUB" | "USD";
export interface IRates {
  [key: string]: { [key in currencyAvaiableType]: number };
}
export const defaultCurrency: currencyAvaiableType = "RUB";

export interface ICurrencyExchange {
  rates: IRates;
  start_at: string;
  base: string;
  end_at: string;
}

export const getRates = http<ICurrencyExchange>(
  `https://api.exchangeratesapi.io/history?start_at=2020-07-01&end_at=2020-07-10&symbols=${defaultCurrency}`
);

export const convertCurrencyToGraph = (
  rates: IRates,
  currency: currencyAvaiableType
): GraphDataType => {
  const data: GraphDataType = [];
  let i = 0; 
  let multiplier = 630 / Object.keys(rates).length
  for (let key in rates) {
    data.push([i++ * multiplier, rates[key][currency]]);
  }
  return data;
};
