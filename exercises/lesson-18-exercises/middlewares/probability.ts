import { Middleware } from "@reduxjs/toolkit";

export const probabilityMiddleware: Middleware = () => (next) => (action) => {
  const { probability } = action.meta;
  const random = Math.random();
  if (probability && probability <= random) {
    return;
  }
  return next(action);
};
