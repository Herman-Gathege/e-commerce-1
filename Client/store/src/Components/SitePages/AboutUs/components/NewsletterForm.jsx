import React from "react";
import styles from "../styles/NewsletterForm.module.css";

export const NewsletterForm = () => {
  return (
    <form className={styles.newsletterContainer}>
      <div className={styles.newsletterText}>
        Join us to get latest updates on upcoming events.
      </div>
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
          <label htmlFor="emailInput" className="visually-hidden">
            Email address
          </label>
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
      </div>
      <div className={styles.privacyText}>
        By signing up you agree to our privacy policies.
      </div>
    </form>
  );
};
