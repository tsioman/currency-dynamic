import React from "react";
import { Select } from "../../components/Select/Select";
import { action } from "@storybook/addon-actions";

import { withKnobs } from "@storybook/addon-knobs";

export default {
  title: "GraphMakerComponents",
  decorators: [withKnobs],
};

const selectChange = action("Select change");

export const SelectControl: React.FC<{}> = () => (
  <Select
    selected="label"
    values={[
      { label: "test label 1", value: "test value" },
      { label: "test numeric", value: 10 },
      { label: "just string", value: "string" },
    ]}
    onChange={(e) => {
      selectChange(e.target.value);
    }}
  />
);
