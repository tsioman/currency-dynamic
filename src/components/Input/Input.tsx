import React from "react";
import { InputStyled, InputWrapperStyled, LabelStyled } from "./Input.styled";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
}

export const Input: React.FC<InputProps> = ({ labelText, ...props }) => {
  return (
    <InputWrapperStyled>
      <LabelStyled>{labelText}</LabelStyled>
      <InputStyled {...props} />
    </InputWrapperStyled>
  );
};
