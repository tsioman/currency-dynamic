import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { ButtonIcon } from "./ButtonIcon";
import { AnimationControl } from "../../types/";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};
let buttonId = 1;
const buttons: AnimationControl[] = ["play", "pause", "stop"];
const onButtonClick = action("Button click");

export const ButtonControl: React.FC<{}> = () => (
  <>
    {buttons.map((button) => (
      <>
        <ButtonIcon
          key={buttonId++}
          icon={button}
          disabled={false}
          isActive={false}
          onClick={(e) => {
            onButtonClick(e);
          }}
        />

        <ButtonIcon
          key={buttonId++}
          icon={button}
          disabled={true}
          isActive={true}
          onClick={(e) => {
            onButtonClick(e);
          }}
        />
      </>
    ))}
  </>
);
