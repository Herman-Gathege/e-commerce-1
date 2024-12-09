import React from "react";
import { FormInput } from "./FormInput";
import styles from "./Signup.module.css";

const formFields = [
  {
    id: "firstName",
    label: "First Name",
    placeholder: "Enter your first name",
  },
  { id: "lastName", label: "Last Name", placeholder: "Enter your last name" },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "Enter your email",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
  },
];

export const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.signupForm}>
      <div className={styles.formHeader}>
        <h1 className={styles.formTitle}>My ACCOUNT</h1>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/87777cbe5fd3daed5edc7568e0b9d063696b1ac5a6af51f577e3620aca291756?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.headerIcon}
          alt=""
        />
      </div>

      {formFields.map((field) => (
        <FormInput key={field.id} {...field} />
      ))}

      <div className={styles.submitSection}>
        <button type="submit" className={styles.submitButton}>
          SIGN UP NOW !
        </button>
      </div>

      <div className={styles.formFooter}>
        <a href="#" className={styles.storeLink}>
          RETURN TO STORE
        </a>
        <a href="#" className={styles.forgotLink}>
          Forgot Password
        </a>
      </div>
    </form>
  );
};
