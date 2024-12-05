import React from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d75dea5fa6d44819ec87d4c275b6b749210a215cbd118f8d379a3dbe3faa82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt="Everyday Finds Logo"
          className={styles.logo}
        />
        <div className={styles.brandName}>Everyday Finds</div>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navItem}>New In!</div>
        <div className={styles.navItem}>About Us</div>
        <div className={styles.navItem}>Contact Us</div>
      </div>
      <div className={styles.cartSection}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d757a9918039769948053d47a4193fdb8ea0f740fba580c4b19a91c6e6477560?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt=""
          className={styles.icon}
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f820cf6004cdd4151359a329a8c452d734820d115e55bb649d633e2556fd440?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          alt=""
          className={styles.icon}
        />
        <div className={styles.cartInfo}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d1ba323d465c89a0c4ca10ebc3ed65046a8319c1324c30a2fd52d5f02df964?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt="Shopping cart"
            className={styles.icon}
          />
          <div>Bag (2)</div>
        </div>
      </div>
    </nav>
  );
};
