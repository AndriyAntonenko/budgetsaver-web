import React from "react";
import cn from "classnames";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import styles from "./modal-window.module.css";

export const ModalWindow = ({ children, open = false, onClose }) => {
  const classes = cn(styles.modal, {
    [styles.modal__open]: open,
  });

  return (
    <div className={classes}>
      <div className={styles.modal__content}>
        <div className={styles.modal__closeIcon} onClick={onClose}>
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  );
};
