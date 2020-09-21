import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  padding: .5em 1em .5em 0;
  width: 10%;
`;

const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 10px;
  flex: 1;
`;

const BaseInput = css`
  margin: 10px 0;
  display: flex;
  justify-content: flex-end;
`;

const InputWrapper = styled.div`
  ${BaseInput};
`;

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Input: React.FC<InputProps> = ({ labelText, ...props }) => {
  return (
  <InputWrapper>
    <Label>
      {labelText}
    </Label>
    <InputStyled {...props} />
  </InputWrapper>
  )
};
