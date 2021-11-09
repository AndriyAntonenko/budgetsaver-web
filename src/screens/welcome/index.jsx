import React from "react";

import { Screen } from "../../components/screen";
import { WelcomeMessage } from "../../stateful-components/welcome-message";

export const WelcomeScreen = () => {
  return (
    <Screen>
      <WelcomeMessage />
    </Screen>
  );
};
