import React from "react";
import styles from "../styles/NewsletterForm.module.css";

export const NewsletterForm = () => (
  <form className={styles.newsletterForm}>
    <label htmlFor="emailInput" className="visually-hidden">
      Email address
    </label>
    <div className={styles.inputContainer}>
      <input
        type="email"
        id="emailInput"
        className={styles.emailInput}
        placeholder="Email address"
        aria-label="Email address"
      />
      <div className={styles.divider} />
      <button type="submit" className={styles.subscribeButton}>
        Subscribe
      </button>
    </div>
  </form>
);
