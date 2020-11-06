import { ISagaModule } from "redux-dynamic-modules-saga";
import { reducer } from "./reducer";
import { currencySaga } from "./saga";

export const getCurrencyModule = (): ISagaModule<typeof reducer> => ({
  id: "currency",
  reducerMap: {
    currency: reducer,
  },
  sagas: [currencySaga],
});
