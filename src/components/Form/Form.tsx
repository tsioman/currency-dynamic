import React from "react";
import { FormStyled, FormWrapperStyled } from "./Form.styled";

type FormType = {
  onSubmit?: (e: React.FormEvent) => Promise<void>;
  formName?: string;
};

export const Form: React.FC<FormType> = ({ ...props }) => {
  return (
    <FormWrapperStyled>
      {props.formName && <h2>{props.formName}</h2>}
      <FormStyled {...props} />
    </FormWrapperStyled>
  );
};
