import React from "react";
import { Input } from "../../components/Input/Input";

import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};

export const InputControl: React.FC<{}> = () => (
  <>
    <Input
      labelText="Label:"
      type="text"
      placeholder="Placeholder"
      value={""}
      onChange={() => {}}
    />
  </>
);
