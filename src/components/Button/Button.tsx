import React from "react";
import { ButtonStyleType, ButtonStyled } from "./Button.styled";

type ButtonType = ButtonStyleType & {
  textButton: string;
  onClick?: () => void;
};

export const Button: React.FC<ButtonType> = ({ textButton, ...props }) => {
  return <ButtonStyled {...props}>{textButton}</ButtonStyled>;
};
