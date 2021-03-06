import React from "react";
import styled from "@emotion/styled";

export const SelectStyled = styled.select`
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
  padding: 11px 5px;
  margin: 5px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

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
