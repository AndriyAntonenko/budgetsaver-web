import React from "react";
import cn from "classnames";
import styles from "./button.module.css";

export const Button = ({ children, className, ...nativeProps }) => (
  <button className={cn(styles.button, className)} {...nativeProps}>{children}</button>
);
