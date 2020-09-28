import * as R from "ramda";

// Задание 1
export type Team = { name: string; score: number };

export const getTopName = R.compose(
  R.prop("name"),
  R.last,
  R.sortBy((t: Team) => t.score)
);

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

const createQs = R.compose(
  R.concat("?"),
  R.join("&"),
  R.map((val: [string]) => R.join("=", val)),
  R.toPairs
);

// Задание 3
const parseQs = R.compose(
  R.fromPairs,
  R.map((e: string) => e.split("=")),
  R.split("&"),
  R.replace("?", "")
);
