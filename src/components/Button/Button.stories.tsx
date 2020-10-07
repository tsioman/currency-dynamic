import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { InitialConfig } from "../../data";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};
let buttonKey = 1;
export const GraphButton: React.FC<{}> = () => (
  <>
    {InitialConfig.buttons.map(button => (
      <Button
        key={buttonKey++}
        color={button.color}
        textButton={button.color}
        isActive={boolean("Active", false)}
        onClick={action("Button click")}
      />
    ))}
    <Button
        color={"blue"}
        textButton={text("any text", "long long text on button")}
        isActive={boolean("Active", true)}
        onClick={action("Button click")}
      />
  </>
);
