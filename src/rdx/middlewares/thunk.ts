import { Dispatch, AnyAction } from "@reduxjs/toolkit";

type MiddlewareApi = {
  dispatch: Dispatch;
  getState: () => State;
};
type Next = (action: AnyAction) => AnyAction;

export const thunk = (middleware: MiddlewareApi) => (next: Next) => (
  action: AnyAction
) => {
  return typeof action === "function"
    ? action(middleware.dispatch, middleware.getState)
    : next(action);
};
