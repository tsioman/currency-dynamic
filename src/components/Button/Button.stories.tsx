import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, optionsKnob } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { ColorSetType } from "../../types";

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

export const GraphButton: React.FC<{}> = () => (
  <Button
    color={value as ColorSetType}
    textButton={value}
    isActive={boolean("Active", false)}
    onClick={action("Button click")}
  />
);
