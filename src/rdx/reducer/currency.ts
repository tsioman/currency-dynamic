import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrencyFromApi,
  ICurrencyExchange,
  currencyGraphConverter,
  IRates,
} from "@/services/Currency";
import { GraphDataType } from "@/types";
import { CurrencyState } from "@/rdx/reducer";
type State = {
  loading: boolean;
  data: { rates: IRates; graph: GraphDataType } | null;
  error: string | null;
};
const initialState: State = {
  loading: false,
  data: null,
  error: null,
};

export const fetchCurrency = createAsyncThunk(
  "currency/fetchCurrency",
  async (params, { getState }) => {
    const { settings } = <CurrencyState>getState();
    const { area, period, currency } = settings;
    const ratesData = <ICurrencyExchange>await getCurrencyFromApi(currency, period);
    const graph = <GraphDataType>currencyGraphConverter(ratesData, currency, area);
    return {
      rates: ratesData.rates,
      graph,
    };
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCurrency.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCurrency.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message ? action.error.message : "";
    });
    builder.addCase(fetchCurrency.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});
