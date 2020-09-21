import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { ButtonIcon } from "./ButtonIcon";
import { AnimationControl } from "../../types/";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};
let buttonId = 1;
const buttons: AnimationControl[] = ["play", "pause", "stop"];

export const ButtonControl: React.FC<{}> = () => (
  <>
    {buttons.map((button) => (
      <ButtonIcon
        key={buttonId++}
        icon={button}
        isActive={false}
        onClick={() => {}}
      />
    ))}
    {buttons.map((button) => (
      <ButtonIcon
        key={buttonId++}
        icon={button}
        isActive={true}
        onClick={() => {}}
      />
    ))}
  </>
);
