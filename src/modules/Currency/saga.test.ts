import { select } from "redux-saga/effects";
import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as matchers from "redux-saga-test-plan/matchers";
import { selectCurrentCurrency, selectPeriod } from "@/modules/SettingsForm";
import { getCurrency, currencySaga, watchRequest } from "./saga";
import { reducer, actions, fetchCurrency } from "./reducer";
import {
  setSettings,
  actions as settingsAction,
} from "../SettingsForm/reducer";
import { getCurrencyFromApi, ratesToCurrency } from "./services/Currency";
import { responseRUB } from "@/../__mocks__/rates";
import { throwError } from "redux-saga-test-plan/providers";

describe("Currency from API load", () => {
  it("check is fetching and transform data ok", () => {
    const transformedResponseData = [81.1888, 93.745, 92.5353];
    return expectSaga(getCurrency)
      .withReducer(reducer)
      .provide([
        [select(selectCurrentCurrency), "RUB"],
        [select(selectPeriod), { from: "2020-10-01", to: "2020-10-10" }],
        [matchers.call.fn(getCurrencyFromApi), responseRUB],
        [matchers.call.fn(ratesToCurrency), transformedResponseData],
      ])
      .put(actions.pending())
      .hasFinalState({
        loading: false,
        data: transformedResponseData,
        error: null,
      })
      .run();
  });
  it("check is fethcing error", () => {
    const error = new Error("API error");
    return expectSaga(getCurrency)
      .withReducer(reducer)
      .provide([
        [select(selectCurrentCurrency), "RUB"],
        [select(selectPeriod), { from: "2020-10-01", to: "2020-10-10" }],
        [matchers.call.fn(getCurrencyFromApi), throwError(error)],
      ])
      .put(actions.pending())
      .put(actions.rejected(error))
      .hasFinalState({
        loading: false,
        data: null,
        error: error,
      })
      .run();
  });
  describe("Full currency fetch flow", () => {
    it("fetch data flow with action subscribe", () => {
      const saga = testSaga(currencySaga);
      saga
        .next()
        .fork(watchRequest)
        .save("currecnFetchFlow")
        .next()
        .take([setSettings, settingsAction.setCurrency])
        .next()
        .put(fetchCurrency())
        .next()
        .finish();
    });
  });
});
