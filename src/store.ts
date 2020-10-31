import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { settingsSlice } from "@/modules/SettingsForm/";
import { currencySlice } from "@/modules/Currency/";
import { animationSlice } from "@/modules/AnimationControls/";
import { loginSlice, loginSaga } from "@/modules/Auth";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}

export const reducer = combineReducers({
  settings: settingsSlice.reducer,
  currency: currencySlice.reducer,
  animation: animationSlice.reducer,
  login: loginSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({}), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export type CurrencyState = ReturnType<typeof reducer>;