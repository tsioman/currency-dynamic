import { combineReducers } from "redux";
import { settingsSlice } from "./settings";
import { currencySlice } from "./currency";
import { animationSlice } from "./animation";

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  currency: currencySlice.reducer,
  animation: animationSlice.reducer,
});

export type CurrencyState = ReturnType<typeof reducer>;
