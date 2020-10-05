import { Middleware } from "@reduxjs/toolkit";

export const probabilityMiddleware: Middleware = () => (next) => (action) => {
  const { meta } = action;
  if (meta.probability && meta.probability <= Math.random()) {
    return;
  }
  return next(action);
};
