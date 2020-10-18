import { combineReducers } from "redux";
import { settingsSlice } from "./settings";
import { currencySlice } from "./currency";
import { animationSlice } from "./animation";
import { loginSlice } from "@/containers/Auth/";

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  currency: currencySlice.reducer,
  animation: animationSlice.reducer,
  login: loginSlice.reducer
});

export type CurrencyState = ReturnType<typeof reducer>;
