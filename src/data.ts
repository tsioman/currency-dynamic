import { InitialConfigType, GraphDataType } from "./types/";

export const InitialConfig: InitialConfigType = Object.freeze({
  color: "red",
  graph: [],
  colorSet: ["red", "green"],
  area: {
    width: 600,
    height: 300,
  },
  currency: "RUB"
});

export const stableGraph: GraphDataType = [
  [1, 3],
  [2, 5],
  [3, 2],
  [4, 16],
  [18, 5],
];
