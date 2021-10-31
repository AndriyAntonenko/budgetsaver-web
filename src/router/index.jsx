import React from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";

import { SignUpScreen } from "../screens/sign-up";
import { SignInScreen } from "../screens/sign-in";

export const RootRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/sign-up">
          <SignUpScreen />
        </Route>
        <Route path="/login">
          <SignInScreen />
        </Route>
        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
