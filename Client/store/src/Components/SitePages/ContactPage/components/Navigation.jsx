import React from "react";
import styles from "../ContactPage.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigationBar}>
      <div className={styles.brandContainer}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d75dea5fa6d44819ec87d4c275b6b749210a215cbd118f8d379a3dbe3faa82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.brandLogo}
          alt="Everyday Finds logo"
        />
        <div className={styles.brandName}>Everyday Finds</div>
      </div>
      <div className={styles.navLinks}>
        <div className={styles.navLinkCaveat}>New In!</div>
        <div className={styles.navLink}>About Us</div>
        <div className={styles.navLink}>Contact Us</div>
      </div>
      <div className={styles.userActions}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cbbc480d4db2c4c8c64141267bb9f125e44fd462554735ba595cc59b093fc2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt="Search"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f820cf6004cdd4151359a329a8c452d734820d115e55bb649d633e2556fd440?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt="User account"
        />
        <div className={styles.cartContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c9d1ba323d465c89a0c4ca10ebc3ed65046a8319c1324c30a2fd52d5f02df964?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.actionIcon}
            alt="Shopping cart"
          />
          <div>Bag (2)</div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
