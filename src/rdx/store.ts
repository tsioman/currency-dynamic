import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { peopleSlice } from "./reducer/people";
import { probabilityMiddleware } from "./middlewares/probability";

const reducer = combineReducers({
  people: peopleSlice.reducer,
});

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware(), probabilityMiddleware],
});

export type PeopleState = ReturnType<typeof reducer>;
