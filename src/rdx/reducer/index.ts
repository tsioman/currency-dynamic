import { combineReducers } from "redux";
import { settingsSlice } from "@/modules/SettingsForm";
import { currencySlice } from "@/modules/Currency";
import { animationSlice } from "@/modules/AnimationControls";
import { loginSlice } from "@/modules/Auth";

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  currency: currencySlice.reducer,
  animation: animationSlice.reducer,
  login: loginSlice.reducer,
});

export type CurrencyState = ReturnType<typeof reducer>;
