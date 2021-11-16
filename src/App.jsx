import React from "react";
import { RootRouter } from "./router";
import { RootModal } from "./stateful-components/modals";

function App() {
  return (
    <>
      <RootRouter />
      <RootModal />
    </>
  );
}

export default App;
