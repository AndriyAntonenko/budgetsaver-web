import React from "react";
import styles from "./textarea.module.css";

export const Textarea = React.forwardRef(({ label, name, ...nativeProps }, ref) => {
  return <textarea ref={ref} className={styles.textarea} placeholder={name} name={name} {...nativeProps} />;
});
