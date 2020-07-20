import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

export default {
  title: "Storybook Knobs example",
  decorators: [withKnobs],
};

export const withAnActionButton: React.FC<{}> = () => (
  <button
    onClick={action("button-click")}
    disabled={boolean("Disabled", false)}
  >
    {text("Label", "Hello Storybook")}
  </button>
);

export const thisIsTestComponent: React.FC<{}> = () => {
  const name = text("Name", "James");
  const age = number("Age", 35);
  const bool = boolean("Check", false)
  const content = `I am ${name} and I'm ${age} years old.`;

  return  bool ? <div>{content}</div> : <span>Please set Check is checked</span>;
};
