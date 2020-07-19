import {
  mathOperators,
  singleMathOperators,
} from "./operators";
import { isNumber } from "./helpers";

export type ParsedLineType = (string | number)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];

    const isPrevSingleOperator = singleMathOperators.hasOwnProperty(prevItem);
    const isValidNumberPush = !isNumber(prevItem) && !isPrevSingleOperator && isNumber(item);
    const isValidOperatorPush =
      isNumber(prevItem) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item) ||
      isPrevSingleOperator && !isNumber(item)
     

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush) {
      result.push(item);
    } else {
      throw new TypeError("Unexpected string");
    }
    return result;
  }, []);
};
