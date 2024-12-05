import React from "react";
import styles from "./styles/AboutUs.module.css";
import { Logo } from "./components/Logo";
import { NavigationLink } from "./components/NavigationLink";
import { CartIcon } from "./components/CartIcon";

const navigationLinks = ["New In!", "About Us", "Contact Us"];


export const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      <nav className={styles.navbar}>
        <Logo />
        <div className={styles.navLinks}>
          {navigationLinks.map((link, index) => (
            <NavigationLink key={index} text={link} />
          ))}
        </div>
        <div className={styles.navIcons}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9cbbc480d4db2c4c8c64141267bb9f125e44fd462554735ba595cc59b093fc2?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.icon}
            alt="Search icon"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9f820cf6004cdd4151359a329a8c452d734820d115e55bb649d633e2556fd440?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.icon}
            alt="User account icon"
          />
          <CartIcon />
        </div>
      </nav>

      <main className={styles.mainContent}>
        <div className={styles.breadcrumb}>Home / About Us</div>
        <div className={styles.contentWrapper}>
          <h1 className={styles.title}>Learn More About Everyday Finds</h1>
          <div className={styles.imageContainer}>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d534797fda9641fa385c89d7b202d782b4045f5895d270cc8ceaf16eb7042ed?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
              className={styles.mainImage}
              alt="Everyday Finds store showcase"
            />
          </div>
        </div>
        <article className={styles.aboutText}>
          {/* Content from the original long text block */}
        </article>
      </main>

      
    </div>
  );
};
