import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { WelcomeScreen } from "../screens/welcome";

export const AuthRouter = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/">
        <WelcomeScreen />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  </BrowserRouter>
);
