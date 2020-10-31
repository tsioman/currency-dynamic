import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "ramda";
import { loginSlice } from "./reducer";
import { CurrencyState } from "@/store";
import { Redirect } from "react-router";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Form } from "@/components/Form/Form";

const mapStateToProps = ({ login }: CurrencyState) => ({
  ...login,
});

const mapDispatchToProps = {
  loginAction: loginSlice.actions.login,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export const LoginFormComponent: React.FC<Props> = ({
  username,
  loginAction,
}) => {
  const [name, setName] = useState(username);
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      loginAction(name);
    },
    [name, loginAction]
  );

  const onChange = useCallback(
    (ev: React.FormEvent) => setName((ev.target as HTMLInputElement).value),
    [setName]
  );

  return isEmpty(username) ? (
    <Form onSubmit={onSubmit} formName="Enter your name for login">
      <Input
        minLength={4}
        maxLength={10}
        labelText="Name:"
        value={name}
        onChange={onChange}
      />
      <Button isFormButton={true} textButton="Login" />
    </Form>
  ) : (
    <Redirect to="/" />
  );
};

export const LoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormComponent);
