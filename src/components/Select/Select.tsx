import React from "react";
import styled from "@emotion/styled";

type SelectType = {
  onChange: (e: HTMLSelectElement) => void;
  values: string[]|number[];
  selected: string|number;
};

const SelectWrapper = styled.select`
  display: inline-block;
  vertical-align: middle;
  border-radius: 4px;
  padding: 11px 5px;
  margin: 5px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);`
;

export const Select: React.FC<SelectType> = ({...props}) => {
  return (
    <SelectWrapper onChange={props.onChange}>
      {props.values.map(val=>(
        <option value={val}>{`${val}x`}</option>
      ))}
    </SelectWrapper>
  );
};
