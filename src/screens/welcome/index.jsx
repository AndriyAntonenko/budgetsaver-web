import React from "react";

import { Screen } from "../../components/screen";
import { WelcomeMessage } from "../../stateful-components/welcome-message";
import { Groups } from "../../stateful-components/groups";

export const WelcomeScreen = () => {
  return (
    <Screen>
      <WelcomeMessage />
      <Groups />
    </Screen>
  );
};
