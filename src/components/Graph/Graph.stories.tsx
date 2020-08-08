import React from "react";
import { withKnobs, number, optionsKnob } from "@storybook/addon-knobs";
import { Graph } from "./Graph";
import { ColorSetType } from "../../types";
import { InitialConfig } from "../../data";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};

const label = "Colors";
const options: Record<ColorSetType, string> = {
  red: "red",
  green: "green",
  blue: "blue",
  violet: "violet",
};
const defaultValue = "red";

const value = optionsKnob(
  label,
  options,
  defaultValue,
  {
    display: "inline-radio",
  },
  "Colors"
);

const graphGroupId = "Graph Parameters";

export const GraphBody: React.FC<{}> = () => (
  <Graph
    options={{width: 300, height: 300, color: value}}
    data={InitialConfig.graph}
  />
);
