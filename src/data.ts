import { InitialConfigType, GraphDataType } from "./types/";

export const InitialConfig: InitialConfigType = Object.freeze({
  color: "blue",
  graph: [
    [1, 3],
    [2, 5],
    [3, 2],
    [4, 16],
    [18, 5],
  ],
  colorSet: ["red", "green", "blue", "violet"],
});


export const stableGraph: GraphDataType = [
  [1, 3],
  [2, 5],
  [3, 2],
  [4, 16],
  [18, 5],
];