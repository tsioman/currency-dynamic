import React, { useState, useEffect } from "react";
import { isLoggedIn } from "@/modules/Auth/authApi";
import { Redirect } from "react-router-dom";

enum CheckState {
  initiated,
  succeed,
  failed,
}

export const withAuth = <Props extends Record<string, any>>(
  Component: React.ComponentType<Props>,
  redirectPath = "/login"
) =>
  function Auth(props: Props) {
    const [isAuthorized, setIsAuthorized] = useState(CheckState.initiated);

    useEffect(() => {
      (async () => {
        const isAuthorized = await isLoggedIn();
        setIsAuthorized(isAuthorized ? CheckState.succeed : CheckState.failed);
      })();
    }, []);

    if (isAuthorized === CheckState.initiated) {
      return <div>Checking if user is authorized</div>;
    }

    if (isAuthorized === CheckState.failed) {
      return <Redirect to={redirectPath} />;
    }

    return <Component {...props} />;
  };
