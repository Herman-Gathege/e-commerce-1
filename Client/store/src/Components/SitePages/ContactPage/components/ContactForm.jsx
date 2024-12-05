import React from "react";
import styles from "../ContactPage.module.css";

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <label htmlFor="name" className={styles["visually-hidden"]}>
          Name
        </label>
        <input
          type="text"
          id="name"
          className={styles.formInput}
          placeholder="Name"
          required
        />
      </div>
      <div className={styles.inputContainer} style={{ marginTop: "19px" }}>
        <label htmlFor="email" className={styles["visually-hidden"]}>
          Email
        </label>
        <input
          type="email"
          id="email"
          className={styles.formInput}
          placeholder="Email"
          required
        />
      </div>
      <div className={styles.inputContainer} style={{ marginTop: "19px" }}>
        <label htmlFor="subject" className={styles["visually-hidden"]}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className={styles.formInput}
          placeholder="Subject"
          required
        />
      </div>
      <div className={styles.messageContainer}>
        <label htmlFor="message" className={styles["visually-hidden"]}>
          Message
        </label>
        <textarea
          id="message"
          className={styles.messageArea}
          placeholder="Your message"
          required
        />
      </div>
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
