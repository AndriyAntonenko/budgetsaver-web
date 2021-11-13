import React from "react";
import { observer } from "mobx-react-lite";

import { AuthRouter } from "./auth.router";
import { NoAuthRouter } from "./no-auth.router";
import { Loader } from "../components/loader";
import { useStore } from "../storage";

export const RootRouter = observer(
  () => {
    const { authStore } = useStore();

    React.useEffect(() => {
      authStore.checkIsAuth();
    }, [authStore]);
  
    console.info(authStore.isAuthenticationChecked);
    if (!authStore.isAuthenticationChecked) {
      // @TODO: Show loader
      return <Loader fullScreen/>;
    }

    return authStore.isAuthenticated ? <AuthRouter /> : <NoAuthRouter />;
  }
);
