import { GraphDataType, AreaType, CurrencyAvaiableType } from "../../types";
import { http } from "../../api/index";

export interface IRates {
  [name: string]: { [key: string]: number };
}
export interface ICurrencyExchange {
  rates: IRates;
  start_at: string;
  base: string;
  end_at: string;
}

export const getCurrency = (currency: CurrencyAvaiableType) =>
  http<ICurrencyExchange>(
    `https://api.exchangeratesapi.io/history?start_at=2020-07-01&end_at=2020-08-10&symbols=${currency}`
  );

export const normalize = (value: number, min: number, max: number) =>
  Math.abs((value - min) / (max - min));

export const ratesToData = (
  rates: IRates,
  currency: CurrencyAvaiableType
): number[] => {
  const data = [];
  for (let key in rates) {
    data.push(rates[key][currency]);
  }
  return data;
};

export const convertCurrencyToGraph = (
  rates: IRates,
  currency: CurrencyAvaiableType,
  area: AreaType
) => {
  const data = ratesToData(rates, currency);
  return dataToGraph(data, area);
};

export const dataToGraph = (data: number[], area: AreaType): GraphDataType => {
  const xInterval = area.width / data.length;
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);
  return data.map((val, i) => [
    xInterval * i++,
    normalize(val, min, max) * area.height,
  ]);
};
