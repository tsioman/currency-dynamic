import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "@/rdx/store";
import { LoginScreen } from "@/screens/LoginScreen";
import { CurrecnyScreen } from "@/screens/CurrecnyScreen";
import { NotFoundScreen } from "@/screens/NotFoundScreen";

export const App: React.FC<{}> = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/login">
          <LoginScreen />
        </Route>
        <Route exact path="/">
          <CurrecnyScreen />
        </Route>
        <Route path="*">
          <NotFoundScreen />
        </Route>
      </Switch>
    </Router>
  </Provider>
);
