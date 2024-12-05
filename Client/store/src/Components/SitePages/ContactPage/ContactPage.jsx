import React from "react";
import styles from "./ContactPage.module.css";
import Navigation from "./components/Navigation";
import ContactInfo from "./components/ContactInfo";
import SocialLinks from "./components/SocialLinks";
import ContactForm from "./components/ContactForm";

const ContactPage = () => {
  return (
    <div className={styles.contactContainer}>
      <Navigation />
      <div className={styles.mainContent}>
        <div className={styles.contentGrid}>
          <div className={styles.sidebarColumn}>
            <div className={styles.contactCard}>
              <div className={styles.cardTitle}>Contact Us</div>
              <ContactInfo />
              <SocialLinks />
              <div className={styles.hoursSection}>
                <div className={styles.hoursTitle}>Hours</div>
                <div className={styles.hoursText}>
                  08:00 - 12.00 Uhr
                  <br />
                  13.00 - 17:00 Uhr
                </div>
              </div>
            </div>
          </div>
          <div className={styles.formColumn}>
            <div className={styles.formContainer}>
              <div className={styles.formContent}>
                <h1 className={styles.formTitle}>Keep in touch</h1>
                <p className={styles.formDescription}>
                  We would love to hear from you and answer any questions you
                  may have. You can contact us by filling out the form below,
                  sending us an email, or calling us on our phone number. We
                  will get back to you as soon as possible. You can also follow
                  us on our social media platforms and subscribe to our
                  newsletter to stay updated on our latest news and offers.
                  Thank you for your interest and support.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
