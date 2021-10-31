import React from "react";
import cn from "classnames";
import { Link as ReactLink } from "react-router-dom";
import styles from "./link.module.css";

export const Link = ({ text, className, ...rest }) => {
  const classes = cn(styles.link, className);

  return (
    <ReactLink {...rest}>
      <span className={classes}>{text}</span>
    </ReactLink>
  );
};
