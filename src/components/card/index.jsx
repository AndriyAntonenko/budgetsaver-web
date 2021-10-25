import React from "react";
import PropTypes from "prop-types";
import cn from "classnames"
import styles from "./card.module.css";

export const Card = ({ children, className }) => (
  <div className={cn(styles.card, className)}>{children}</div>
);

Card.propTypes = {
  className: PropTypes.string,
};
