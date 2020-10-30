import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import createSagaMiddleware from "redux-saga";
import { fork } from "redux-saga/effects";
import { loginSaga } from "@/containers/Auth/";

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield fork(loginSaga);
}

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({}), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
