import React from "react";
import styles from "../styles/CartIcon.module.css";

export const CartIcon = () => {
  return (
    <div className={styles.cartContainer}>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d1ba323d465c89a0c4ca10ebc3ed65046a8319c1324c30a2fd52d5f02df964?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
        className={styles.cartIcon}
        alt="Shopping cart icon"
      />
      <div className={styles.cartCount}>Bag (2)</div>
    </div>
  );
};
