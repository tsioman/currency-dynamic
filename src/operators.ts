export type ScalarOperationType = (first: number, second: number) => number;
export type SingleOperationType = (value: number) => number;

export const fac: SingleOperationType = (value) =>
  value ? value * fac(value - 1) : 1;

export const pow: ScalarOperationType = (first, second) =>
  Math.pow(first, second);

export const mul: ScalarOperationType = (first, second) => first * second;

export const div: ScalarOperationType = (first, second) => first / second;

export const add: ScalarOperationType = (first, second) => first + second;

export const minus: ScalarOperationType = (first, second) => first - second;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "!": fac,
  "^": pow,
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
};

export const singleMathOperators: { [key: string]: SingleOperationType } = {
  "!": fac,
};

export const mathPriorities: number[] = [0, 1, 2];

const [ZERO, FIRST, SECOND] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "!": ZERO,
  "^": FIRST,
  "*": FIRST,
  "/": FIRST,
  "+": SECOND,
  "-": SECOND,
};
