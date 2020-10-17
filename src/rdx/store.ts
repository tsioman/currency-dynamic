import { configureStore, combineReducers } from "@reduxjs/toolkit";
const reducer = combineReducers({});

export const store = configureStore({
  reducer,
});

export type PeopleState = ReturnType<typeof reducer>;
