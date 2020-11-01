import { call, put, fork, select, all, takeLatest } from "redux-saga/effects";
import { actions, fetchCurrency } from "./reducer";
import {
  getCurrencyFromApi,
  ratesToCurrency,
} from "@/modules/Currency/services/Currency";
import { selectCurrentCurrency, selectPeriod } from "@/modules/SettingsForm";
function* getCurrency() {
  try {
    yield put(actions.pending());
    const period = yield select(selectPeriod);
    const currency = yield select(selectCurrentCurrency);
    const result = yield call(getCurrencyFromApi, currency, period);
    const data = ratesToCurrency(result.rates, currency);
    yield put(actions.fulfilled(data));
  } catch (e) {
    yield put(actions.rejected(e.error));
  }
}

function* watchRequest() {
  yield takeLatest(fetchCurrency, getCurrency);
}

export function* currencySaga() {
  yield all([fork(watchRequest)]);
}
