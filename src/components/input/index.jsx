import React from "react";
import styles from "./input.module.css";

export const Input = React.forwardRef(({ label, name, ...nativeProps }, ref) => (
  <div className={styles.input__container}>
    <input ref={ref} className={styles.input} placeholder={name} {...nativeProps} />
    {label && <label htmlFor={name} className={styles.input__label}>{label}</label>}
  </div>
));
