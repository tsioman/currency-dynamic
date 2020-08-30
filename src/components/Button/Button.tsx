import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { ColorSetType } from "../../types/";

type ButtonStyleType = {
  isActive?: boolean;
  color?: ColorSetType;
  isFormButton?: boolean;
};

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
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
  }
`;
const ActiveButton = css`
  top: 1px;
  background-color: #f0f0f0;
  box-shadow: 0 -1px 0px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.24);
`;

const FormButton = css`
  height: 40px;
  width: 110px;
  border: 1px solid transparent;
  background: linear-gradient(180deg, #45a6ff 0%, #0055fb 100%), #c4c4c4;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  position: relative;
`;

const ButtonWrapper = styled.button`
  ${({ isFormButton }: ButtonStyleType) => (isFormButton ? FormButton : BaseButton)}
  ${({ isActive }: ButtonStyleType) => (isActive ? ActiveButton : "")}
  ${({ color }: ButtonStyleType) => `color: ${color}`}
`;

export const Button: React.FC<ButtonType> = ({
  textButton,
  ...props
}) => {
  return (
    <ButtonWrapper {...props}>
      {textButton}
    </ButtonWrapper>
  );
};
