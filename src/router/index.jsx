import React from "react";
import { observer } from "mobx-react-lite";

import { AuthRouter } from "./auth.router";
import { NoAuthRouter } from "./no-auth.router";
import { useStore } from "../storage";

export const RootRouter = observer(
  () => {
    const { authStore } = useStore();

    React.useEffect(() => {
      authStore.checkIsAuth();
    }, [authStore]);
  
    if (!authStore.isAuthenticationChecked) {
      // @TODO: Show loader
      return null;
    }

    return authStore.isAuthenticated ? <AuthRouter /> : <NoAuthRouter />;
  }
);
