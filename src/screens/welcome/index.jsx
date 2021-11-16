import React from "react";

import { Screen } from "../../components/screen";
import { WelcomeMessage } from "../../stateful-components/welcome-message";
import { AddGroupCard } from "../../stateful-components/group-card";

export const WelcomeScreen = () => {
  return (
    <Screen>
      <WelcomeMessage />
      <AddGroupCard />
    </Screen>
  );
};
