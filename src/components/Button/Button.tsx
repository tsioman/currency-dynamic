import React from "react";
import styled from "@emotion/styled";
import {css} from "@emotion/core";
import { ColorSetType } from "../../types/";

type ButtonStyleType = {
  isActive?: boolean;
  color: ColorSetType;
}

type ButtonType = ButtonStyleType & {
  textButton: string;
  onClick: () => void;
};

const BaseButton = css`
  border-radius: 4px;
  padding: 7px 15px;
  margin: 0 5px;
  background-color: white;
  color: black;
  cursor: pointer;
  border: none;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 5px 5px rgba(0,0,0,0.22);
  }
`
const ActiveButton = css`
  top: 1px;
  background-color: #f0f0f0;
  box-shadow: 0 -1px 0px rgba(0,0,0,0.12), 0 1px 1px rgba(0,0,0,0.24);
`
const ButtonWrapper = styled.button`
  ${BaseButton};
  ${({isActive}: ButtonStyleType)=>(isActive ? ActiveButton : '')}
  ${({color}: ButtonStyleType)=>`color: ${color}`}

`;

export const Button: React.FC<ButtonType> = ({
  color,
  textButton,
  isActive,
  onClick,
}) => {
  return (
    <ButtonWrapper
      onClick={onClick}
      color={color}
      isActive={isActive}
    >
      {textButton}
      
    </ButtonWrapper>
  );
};
