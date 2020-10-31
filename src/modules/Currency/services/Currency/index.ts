import {
  GraphDataType,
  AreaType,
  CurrencyAvaiableType,
  DatePeriodType,
} from "@/types";
import { http } from "@/utils/http";

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

export const ratesToCurrency = (
  rates: IRates,
  currency: CurrencyAvaiableType
) => {
  const data = [];
  for (let key in rates) {
    data.push(rates[key][currency]);
  }
  return data;
};

export const currencyToGraph = (
  data: number[] | null,
  area: AreaType
): GraphDataType => {
  if (data) {
    const xInterval = area.width / data.length;
    const max = Math.max.apply(null, data);
    const min = Math.min.apply(null, data);
    return data.map((val, i) => [
      xInterval * i++,
      normalize(val, min, max) * area.height,
    ]);
  }
  return [];
};