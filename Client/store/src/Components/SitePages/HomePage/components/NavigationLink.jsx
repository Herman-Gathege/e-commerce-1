// import React from "react";
// import styles from "../styles/NavigationLink.module.css";

// export const NavigationLink = ({ text }) => (
//   <div className={styles.navLink}>{text}</div>
// );

import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/NavigationLink.module.css";

export const NavigationLink = ({ text, to }) => (
  <div className={styles.navLink}>
    <Link to={to} className={styles.link}>
      {text}
    </Link>
  </div>
);
