import React from "react";
import styles from "./Input.module.css";

export const Input = ({ label, type = "text", id }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input type={type} id={id} className={styles.input} aria-label={label} />
    </div>
  );
};
