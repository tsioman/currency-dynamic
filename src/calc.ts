import { parser } from "./parser";

import {
  zeroPrioritiesCalc,
  firstPrioritiesCalc,
  secondPrioritiesCalc,
} from "./engine";

export const executionCalc = (row: string): number => {
  const stack = parser(row);

  if (stack === null) {
    throw new TypeError("Unexpected string");
  }

  const zeroPrioritiesRes = zeroPrioritiesCalc(stack);

  if (zeroPrioritiesRes.length === 1) {
    return Number(zeroPrioritiesRes[0]);
  }

  const firstPrioritiesRes = firstPrioritiesCalc(zeroPrioritiesRes);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};

export const calc = (row: string): number => {
  const bracketImplementation = (
    inBrackets: Array<string> | null,
    expression: string
  ): number => {
    if (inBrackets === null) {
      return executionCalc(expression);
    }

    const partlyExpression = executionCalc(inBrackets[1].trim());
    return bracketImplementation(
      expression.match(/\(([^\(\)]+)\)/),
      expression.replace(inBrackets[0], `${partlyExpression}`)
    );
  };

  const expressionInBrackets = row.match(/\(([^\(\)]+)\)/);
  return bracketImplementation(expressionInBrackets, row);
};
