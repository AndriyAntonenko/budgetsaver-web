import React from "react";
import cn from "classnames";
import styles from "./screen.module.css";

export const Screen = ({ children, centered, className }) => {
  const classes = cn(styles.screen, className, {
    [styles.screen_centered]: centered,
  });

  return <div className={classes}>{children}</div>
};
