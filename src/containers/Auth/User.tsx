import React, { useState, useCallback } from "react";
import { logout } from "@/api/auth";
import { useHistory } from "react-router-dom";
import { Button } from "@/components/Button/Button";

export const User = () => {
  const login = localStorage.getItem("login");
  const [username, setUserName] = useState(login);
  const history = useHistory();

  const tryToLogOut = useCallback(() => {
    setUserName("");
    logout().then(() => history.go(0));
  }, []);

  return (
    <div style={{ display: "inline-block" }}>
      {username !== "" ? (
        <div>
          <span>Welcome, {username} </span>
          <Button
            color="blue"
            onClick={tryToLogOut}
            textButton="Press to Log Out"
          />
        </div>
      ) : (
        <span>Try to logout</span>
      )}
    </div>
  );
};
