import React from "react";
import { observer } from "mobx-react-lite";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { WelcomeScreen } from "../screens/welcome";
import { Loader } from "../components/loader";
import { useStore } from "../storage";

export const AuthRouter = observer(
  () => {
    const { profileStore } = useStore();

    React.useEffect(() => {
      profileStore.fetchProfile();
    }, [profileStore]);

    if (!profileStore.profile) {
      return <Loader fullScreen />
    }

    return (
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
  }
);
