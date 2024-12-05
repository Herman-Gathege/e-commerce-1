import React from "react";
import styles from "../styles/SocialLink.module.css";

export const SocialLink = ({ icon, text }) => {
  return (
    <div className={styles.socialLinkContainer}>
      <img
        loading="lazy"
        src={icon}
        className={styles.socialIcon}
        alt={`${text} social icon`}
      />
      <div className={styles.socialText}>
        <div className={styles.socialLabel}>{text}</div>
      </div>
    </div>
  );
};
