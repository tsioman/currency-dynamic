import React, { useCallback, useState } from "react";
import { login } from "@/api/auth";
import { useHistory } from "react-router-dom";
export const LoginForm: React.FC<{}> = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const onSubmit = useCallback(
    async (ev) => {
      ev.preventDefault();
      await login(name);
      history.push("/app/");
    },
    [name]
  );
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name:
        <input
          placeholder="Enter your name"
          value={name}
          onChange={(ev) => setName((ev.target as HTMLInputElement).value)}
        />
      </label>
      <button>Login</button>
    </form>
  );
};
