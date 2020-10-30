import { call } from "redux-saga/effects";
import { expectSaga } from "redux-saga-test-plan";

import { checkUserSession, saveUserSession } from "./saga";
import { CheckState, actions, reducer } from "./reducer";

import { getUserSession, login } from "./authApi";

describe("Login saga", () => {
  it("login success", () => {
    const userSession = "Username";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[call(getUserSession), userSession]])
      .put(actions.login(userSession))
      .hasFinalState({
        username: userSession,
        status: CheckState.succeed,
      })
      .run();
  });
  it("login fail", () => {
    const userSession = "min";
    return expectSaga(checkUserSession)
      .withReducer(reducer)
      .provide([[call(getUserSession), userSession]])
      .hasFinalState({
        username: userSession,
        status: CheckState.failed,
      })
      .run();
  });
  it("checkUserSession", () => {
    const userSession = "Username";
    return expectSaga(saveUserSession, {
      type: actions.login.type,
      payload: userSession,
    })
      .call(login, userSession)
      .run();
  });
});
