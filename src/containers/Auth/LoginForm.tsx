import React, { useCallback, useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "ramda";
import { loginSlice } from "./reducer";
import { CurrencyState } from "@/rdx/reducer";
import { Redirect } from "react-router";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Form } from "@/components/Form/Form";

const mapStateToProps = ({ login }: CurrencyState) => ({
  ...login,
});
const mapDispatchToProps = {
  login: loginSlice.actions.login,
};

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

export const LoginFormComponent: React.FC<Props> = ({ username, login }) => {
  const [name, setName] = useState(username);
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      if (!isEmpty(name)) {
        login(name);
      }
    },
    [name, login]
  );

  const onChange = (ev: React.FormEvent) =>
    setName((ev.target as HTMLInputElement).value);

  return isEmpty(username) ? (
    <Form onSubmit={onSubmit} formName="Enter your name for login">
      <Input labelText="Name:" value={name} onChange={onChange} />
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
