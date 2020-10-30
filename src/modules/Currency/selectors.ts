import { CurrencyState } from "@/store";
import { GraphDataType } from "@/types";
import { currencyToGraph } from "@/modules/Currency/services/Currency";

export function selectCurrecnyToGraph(state: CurrencyState): GraphDataType {
  return currencyToGraph(state.currency.data, state.settings.area);
}
