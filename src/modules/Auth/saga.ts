import { isEmpty } from "ramda";
import { call, put, fork, take, all } from "redux-saga/effects";
import { getUserSession, login, logout, sentStatistic } from "./authApi";
import { actions } from "./reducer";

export function* clearUserSession() {
  yield all([call(logout), call(sentStatistic)]);
}

export function* checkUserSession() {
  const userSession = yield call(getUserSession);
  if (!isEmpty(userSession)) {
    yield put(actions.login(userSession));
  } else {
    yield put(actions.logout());
    yield* clearUserSession();
  }
}

export function* saveUserSession({
  payload,
}: ReturnType<typeof actions.login>) {
  const username = String(payload);
  yield call(login, username);
}

export function* loginSaga() {
  yield fork(checkUserSession);
  while (true) {
    const action = yield take(actions.login.type);
    yield* saveUserSession(action);
    yield take(actions.logout.type);
    yield* clearUserSession();
  }
}
