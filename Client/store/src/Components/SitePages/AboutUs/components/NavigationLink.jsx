import React from "react";
import styles from "../styles/NavigationLink.module.css";

export const NavigationLink = ({ text }) => {
  return <div className={styles.navLink}>{text}</div>;
};
