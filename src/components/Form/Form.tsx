import React from "react";
import styled from "@emotion/styled";

export const FormWrapperStyled = styled.div`
  position: relative;
  top: 50%;
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

export const FormStyled = styled.form`
  border-radius: 4px;
  padding: 20px;
  background-color: white;
  color: black;
  border: 1px solid silver;
`;

interface IFormType {
  onSubmit?: (e: React.FormEvent) => Promise<void>;
  formName?: string;
}

export const Form: React.FC<IFormType> = ({ ...props }) => {
  return (
    <FormWrapperStyled>
      {props.formName && <h2>{props.formName}</h2>}
      <FormStyled {...props} />
    </FormWrapperStyled>
  );
};
