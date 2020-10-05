import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../api";
import { PeopleResponse } from "../../types/";

export const fetchPeople = createAsyncThunk("people/fetchData", () =>
  http("https://cors-anywhere.herokuapp.com/https://swapi.dev/api/people")
  .then((data) => data as PeopleResponse)
  .catch((e) => {
    throw Error("Fetch Error: " + e);
  })
);

type State = {
  loading: boolean;
  data: PeopleResponse | null;
  error: string;
  show: boolean;
};
const initialState: State = {
  loading: false,
  data: null,
  error: "",
  show: false,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    clickAction: {
      reducer(state, action) {
        const { show } = action.payload;
        state.show = show;
      },
      prepare(payload: boolean) {
        return { payload, meta: { probability: 0.5 } };
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPeople.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : "";
    });
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});

export const { clickAction } = peopleSlice.actions;
