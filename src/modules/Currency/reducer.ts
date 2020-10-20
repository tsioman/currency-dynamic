import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCurrencyFromApi,
  ICurrencyExchange,
  ratesToCurrency,
} from "@/modules/Currency/services/Currency";
import { CurrencyState } from "@/store";
type State = {
  loading: boolean;
  data: number[] | null;
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
    const { period, currency } = settings;
    const ratesData = <ICurrencyExchange>(
      await getCurrencyFromApi(currency, period)
    );
    return ratesToCurrency(ratesData.rates, currency);
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
