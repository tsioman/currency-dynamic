import React from "react";
import { withKnobs, optionsKnob } from "@storybook/addon-knobs";
import { GraphBody } from "./GraphBody";
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

export const GraphBodyComponent: React.FC<{}> = () => (
  <GraphBody area={{ width: 600, height: 300 }} />
);
