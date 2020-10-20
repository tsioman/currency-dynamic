import { CurrencyState } from "@/rdx/reducer";
import { GraphDataType } from "@/types";
import { currencyToGraph } from "@/services/Currency";

export function selectCurrecnyToGraph(state: CurrencyState): GraphDataType {
  return currencyToGraph(state.currency.data, state.settings.area);
}
