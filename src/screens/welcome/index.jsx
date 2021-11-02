import React from "react";
import { useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Screen } from "../../components/screen";
import { useStore } from "../../storage";

export const WelcomeScreen = observer(
  () => {
    const history = useHistory();
    const { authStore } = useStore();

    React.useEffect(() => {
      if (!authStore.isAuthenticated) {
        history.push("/login");
      }
    }, [authStore.isAuthenticated, history]);
    
    return (
      <Screen centered>
        Not implemented yet
      </Screen>
    );
  }
);
