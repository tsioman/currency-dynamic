import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const BaseInput = css`
margin: 10px 0;
display: flex;
justify-content: flex-end;
`;

export const LabelStyled = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  padding: 1em 1em 0.5em 0;
  width: 7%;
`;

export const InputStyled = styled.input`
  height: 40px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  font-size: 18px;
  padding: 5px 10px;
  flex: 1;
`;

export const InputWrapperStyled = styled.div`
  ${BaseInput};
`;
