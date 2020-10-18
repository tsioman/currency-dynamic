import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";
import { ButtonIcon } from "./ButtonIcon";
import { AnimationControl } from "@/types/";

export default {
  title: "Controls",
  decorators: [withKnobs],
};
const buttons: AnimationControl[] = ["stop", "pause", "stop"];
const onButtonClick = action("Button click");

export const ButtonIconControl: React.FC<{}> = () => {
  return (
    <>
      {buttons.map((button, index) => (
        <React.Fragment key={index}>
          <ButtonIcon
            icon={button}
            disabled={false}
            isActive={false}
            onClick={(e) => {
              onButtonClick(e);
            }}
          />

          <ButtonIcon
            icon={button}
            disabled={true}
            isActive={true}
            onClick={(e) => {
              onButtonClick(e);
            }}
          />
        </React.Fragment>
      ))}
    </>
  );
};
