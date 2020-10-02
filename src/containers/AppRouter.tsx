import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginScreen } from "@/screens/LoginScreen";
import { AppScreen } from "@/screens/AppScreen";
import { NotFoundScreen } from "@/screens/NotFoundScreen";
import { ReduxScreen } from "@/screens/ReduxScreen";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";

export const AppRouter: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/">
          <AppScreen />
        </Route>
        <Route path="/redux">
          <ReduxScreen />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
