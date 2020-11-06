import { CurrencyState } from "@/store";

export function selectPeriod(state: CurrencyState) {
  return state.settings.period;
}

export function selectCurrentCurrency(state: CurrencyState) {
  return state.settings.currency;
}
