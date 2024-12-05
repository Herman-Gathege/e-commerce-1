import React from "react";
import { NavigationLink } from "../SitePages/HomePage/components/NavigationLink";
import styles from "./NavigationBar.module.css";

export const NavigationBar = () => (
  <nav className={styles.navBar}>
    <NavigationLink text="Home" to="/" />
    <NavigationLink text="New In" to="/newin" />
    <NavigationLink text="About Us" to="/aboutus" />
    <NavigationLink text="Contact Us" to="/contactus" />

    {/* Add more navigation links as needed */}
  </nav>
);
