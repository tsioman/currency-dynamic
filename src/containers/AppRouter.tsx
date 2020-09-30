import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { AppScreen } from "@/screens/AppScreen";
import { NotFoundScreen } from "@/screens/NotFoundScreen";

export const AppRouter: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route exact path="/">
        <AppScreen />
      </Route>
      <Route path="*">
        <NotFoundScreen />
      </Route>
    </Switch>
  </Router>
);
