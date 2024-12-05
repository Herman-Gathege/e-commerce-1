import React from "react";
import styles from "../styles/Logo.module.css";

export const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d75dea5fa6d44819ec87d4c275b6b749210a215cbd118f8d379a3dbe3faa82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
        className={styles.logoImage}
        alt="Everyday Finds Logo"
      />
      <div className={styles.logoText}>Everyday Finds</div>
    </div>
  );
};
