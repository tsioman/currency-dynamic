import React, { useCallback, useState } from "react";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Form } from "@/components/Form/Form";
import { login } from "@/api/auth";
import { useHistory } from "react-router-dom";

export const LoginForm: React.FC<{}> = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      await login(name);
      history.push("/");
    },
    [name]
  );
  const onChange = useCallback(
    (e) => setName((e.target as HTMLInputElement).value),
    [name]
  );
  return (
    <Form onSubmit={onSubmit} formName="Enter your name for login">
      <Input labelText="Name:" value={name} onChange={onChange} />
      <Button isFormButton={true} textButton="Login" />
    </Form>
  );
};
