import React from "react";
import { NavigationLink } from "../SitePages/HomePage/components/NavigationLink";

import styles from "./NavigationBar.module.css";


export const NavigationBar = () => (

  <nav className={styles.navBar}>
     <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/42d75dea5fa6d44819ec87d4c275b6b749210a215cbd118f8d379a3dbe3faa82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
      className={styles.logoImage}
      alt="Everyday Finds logo"
    />    
    <NavigationLink text="Home" to="/" />
    <NavigationLink text="Dash" to="/dashboard" />
    <NavigationLink text="New In" to="/newin" />
    <NavigationLink text="About Us" to="/aboutus" />
    <NavigationLink text="Contact Us" to="/contactus" />

    {/* Add more navigation links as needed */}
    <div className={styles.userActions}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c027f92f20a54a2df688fa23656646603845d6de9a89bc8e46f06ccb1bd9d37?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt="Search"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa325a82653444030e13a7c4ab4d83b72513ab5f42c4e691ed6023356fe4ff39?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
          className={styles.actionIcon}
          alt="User account"
        />
        <div className={styles.cartContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/87561694d3a971a27352594e50a8b89cec4b094766a508d37790c2e6d42de414?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.actionIcon}
            alt="Shopping bag"
          />
          <div className={styles.cartCount}>Bag (2)</div>
        </div>
      </div>
  </nav>
);
