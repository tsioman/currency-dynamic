import { take, put } from "redux-saga/effects";
import { setSettings, actions } from "./reducer";
import { fetchCurrency } from "@/modules/Currency";

export function* settingsSaga() {
  while (true) {
    yield take([setSettings, actions.setCurrency]);
    yield put(fetchCurrency());
  }
}
