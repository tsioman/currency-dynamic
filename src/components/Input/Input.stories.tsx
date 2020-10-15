import React, { useState } from "react";
import { Input } from "../../components/Input/Input";
import { action } from "@storybook/addon-actions";
import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};
const inputChange = action("Input change");

export const InputControl: React.FC<{}> = () => {
  const [value, setValue] = useState<string>();
  const onChange = (e: React.ChangeEvent) => {
    inputChange((e.target as HTMLInputElement).value);
    setValue((e.target as HTMLInputElement).value);
  };
  return (
    <Input
      labelText="Label:"
      type="text"
      placeholder="Placeholder"
      value={value}
      onChange={onChange}
    />
  );
};
