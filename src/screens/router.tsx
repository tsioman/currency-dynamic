import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { CurrecnyScreen } from "@/screens/CurrecnyScreen";
import { NotFoundScreen } from "@/screens/NotFoundScreen";

export const RootRouter = () => (
  <Router>
    <Switch>
      <Route exact path="/login" component={LoginScreen} />
      <Route exact path="/" component={CurrecnyScreen} />
      <Route path="*" component={NotFoundScreen} />
    </Switch>
  </Router>
);
