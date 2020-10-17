import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ErrorBoundary } from "@/components/ErrorBoundary";

import { LoginScreen } from "@/screens/LoginScreen";
import { AppScreen } from "@/screens/AppScreen";
import { NotFoundScreen } from "@/screens/NotFoundScreen";
import { SettingsScreen } from "@/screens/SettingsScreen";

import { Provider } from "react-redux";
import { store } from "@/rdx/store";

export const App: React.FC<{}> = () => (
  <ErrorBoundary>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route exact path="/">
            <AppScreen />
          </Route>
          <Route path="/settings">
            <SettingsScreen />
          </Route>
          <Route path="*">
            <NotFoundScreen />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </ErrorBoundary>
);
