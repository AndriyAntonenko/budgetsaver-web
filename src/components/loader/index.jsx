import React from "react";
import { Screen } from "../screen";
import styles from "./loader.module.css";

export const Loader = ({ fullScreen }) => {
  if (fullScreen) {
    return (
      <Screen centered>
        <BasicLoader />
      </Screen>
    );
  }

  return <BasicLoader />
};

const BasicLoader = () => {
  return <div className={styles.loader}></div>
};
