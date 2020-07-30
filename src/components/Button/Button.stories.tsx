import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { Button } from "./Button";
import { InitialConfig } from "../../data";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};

export const GraphButton: React.FC<{}> = () => (
  <>
    {InitialConfig.colorSet.map(color => (
      <Button
        color={color}
        textButton={color}
        isActive={boolean("Active", false)}
        onClick={action("Button click")}
      />
    ))}
    <Button
        color={"blue"}
        textButton={text("any text", "long long text on button")}
        isActive={boolean("Active", false)}
        onClick={action("Button click")}
      />
  </>
);
