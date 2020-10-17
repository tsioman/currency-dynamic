import React from "react";
import { ButtonIconWrapper, ButtonType } from "./ButtonIcon.styled";

export const ButtonIcon: React.FC<ButtonType> = ({ ...props }) => (
  <ButtonIconWrapper {...props}>
    <img src={`/img/${props.icon}.png`} />
  </ButtonIconWrapper>
);
