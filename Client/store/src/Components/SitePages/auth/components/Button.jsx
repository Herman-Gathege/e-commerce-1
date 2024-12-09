import React from "react";
import styles from "./Button.module.css";

export const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};
