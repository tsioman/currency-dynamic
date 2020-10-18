import {
  GraphDataType,
  AreaType,
  CurrencyAvaiableType,
  DatePeriodType,
} from "@/types";
import { http } from "@/api/index";

const eventAPICall = new CustomEvent("APICall", {
  detail: () => {
    const time = new Intl.DateTimeFormat("ru-RU", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }).format();
    return `Last API call at: ${time}`;
  },
});
export interface IRates {
  [name: string]: { [key: string]: number };
}
export interface ICurrencyExchange {
  rates: IRates;
  start_at: string;
  base: string;
  end_at: string;
}

export const currencyGraphConverter = (
  data: ICurrencyExchange,
  currency: CurrencyAvaiableType,
  area: AreaType
) => {
  const graphData = ratesToData(data.rates, currency);
  return dataToGraphZoom(graphData, area);
};

export const getCurrencyFromApi = (
  currency: CurrencyAvaiableType,
  period: DatePeriodType
) => {
  window.dispatchEvent(eventAPICall);
  return http<ICurrencyExchange>(
    `https://api.exchangeratesapi.io/history?start_at=${period.from}&end_at=${period.to}&symbols=${currency}`
  );
};

export const normalize = (value: number, min: number, max: number) =>
  Math.abs((value - min) / (max - min));

export const ratesToData = (rates: IRates, currency: CurrencyAvaiableType) => {
  const data = [];
  for (let key in rates) {
    data.push(rates[key][currency]);
  }
  return data;
};

export const dataToGraphZoom = (
  data: number[],
  area: AreaType
): GraphDataType => {
  const xInterval = area.width / data.length;
  const max = Math.max.apply(null, data);
  const min = Math.min.apply(null, data);
  return data.map((val, i) => [
    xInterval * i++,
    normalize(val, min, max) * area.height,
  ]);
};
