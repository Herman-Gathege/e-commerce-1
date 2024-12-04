import React from "react";
import styles from "../styles/NavigationLink.module.css";

export const NavigationLink = ({ text }) => (
  <div className={styles.navLink}>{text}</div>
);
