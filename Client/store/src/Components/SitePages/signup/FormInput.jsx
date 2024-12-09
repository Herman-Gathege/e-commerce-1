import React from "react";
import styles from "./Signup.module.css";

export const FormInput = ({ label, type = "text", id, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={id} className={styles.inputLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.inputField}
        placeholder={placeholder}
        aria-label={label}
      />
    </div>
  );
};
