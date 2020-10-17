import React from "react";
import { SelectStyled } from "./Select.styled";

type SelectType = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selected: string | number;
  values: { label: string; value: string | number }[];
};

export const Select: React.FC<SelectType> = ({
  selected,
  onChange,
  values,
}) => {
  return (
    <SelectStyled defaultValue={selected} onChange={onChange}>
      {values.map((data) => (
        <option key={data.label} value={data.value}>
          {data.label}
        </option>
      ))}
    </SelectStyled>
  );
};
