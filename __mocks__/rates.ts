import { ICurrencyExchange } from "../src/modules/Currency/services/Currency";

export const responseRUB: ICurrencyExchange = {
  rates: {
    "2020-07-16": { RUB: 81.1888 },
    "2020-07-01": { RUB: 79.6793 },
  },
  start_at: "2020-07-01",
  base: "EUR",
  end_at: "2020-08-10",
};

export const responseUSD: ICurrencyExchange = {
  rates: {
    "2020-07-16": { USD: 1.1414 },
    "2020-07-01": { USD: 1.12 },
    "2020-08-06": { USD: 1.1843 },
  },
  start_at: "2020-07-01",
  base: "EUR",
  end_at: "2020-08-10",
};
