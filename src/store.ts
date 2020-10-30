import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { settingsSlice } from "@/modules/SettingsForm/";
import { currencySlice } from "@/modules/Currency/";
import { animationSlice } from "@/modules/AnimationControls/";

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  currency: currencySlice.reducer,
  animation: animationSlice.reducer,
});

export const store = configureStore({
  reducer,
});

export type CurrencyState = ReturnType<typeof reducer>;
