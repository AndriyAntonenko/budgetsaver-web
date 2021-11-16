import React from "react";
import styles from "./group-card.module.css";

export const GroupCardContainer = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={styles.groupCard__container}>
      {children}
    </div>
  );
};
