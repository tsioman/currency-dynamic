import React from "react";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import { Graph } from "./Graph";
import { ColorSetType } from "@/types";
import { InitialConfig } from "@/data";

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
    options={{ area: { width: 600, height: 300 }, color: value, multiplier: 1 }}
    data={InitialConfig.graph}
    playState={"stopped"}
  />
);
