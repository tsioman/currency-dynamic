import { ISagaModule } from "redux-dynamic-modules-saga";
import { reducer } from "./reducer";

export const getCurrencyModule = (): ISagaModule<typeof reducer> => ({
  id: "currency",
  reducerMap: {
    currency: reducer,
  },
});
