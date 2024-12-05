import React from "react";
import { Logo } from "./components/Logo";
import { NavigationLink } from "./components/NavigationLink";
import { SocialLink } from "./components/SocialLink";
import { NewsletterForm } from "./components/NewsletterForm";
import styles from "./styles/HomePage.module.css";
import ProductCard from "../../ProductCard";
import { Link } from 'react-router-dom';


const footerNavLinks = ["Gift Shop", "New In", "About Us", "Contact Us"];
const officialLinks = ["Privacy", "Accessibility", "FAQs", "Terms", "Contacts"];
const socialLinks = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/90b59b9d1be778a53b2f26d64bf1e6db347b51d794b12180f8ab0dd5a00da033?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9260edd0fdc5d66b92698afb33ca41570d5d5b1d7705bbf9d5c5aa7e720395ec?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "Everyday Finds",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ad4772e31b3d9b54b5d04e93155359aa3ca478a459cac11de5ab663f329240ad?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "everydayfinds@gmail.com",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8fad3afac56e667cd9ca16f32d1257fba7e659d152e9b5a704eb373cf4ec6c82?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    text: "+254700976984",
  },
];

const products = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2af9cb4048b9d1218acb3fcdba7277bce05ebbf44efbd59aca2a079bc1a3a947?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    id: 4,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    id: 5,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
  {
    id: 6,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9774f058ff1ea4d34ae9602aeb6a398432bc200639e04968aadda57142c11d14?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
    title: "Yellow Dress",
    size: "Size 10",
    price: "1900",
  },
];

export const HomePage = () => (
  <div className={styles.homePage}>
 

    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>We Bring to You Everyday Finds.</h1>
          <p className={styles.heroDescription}>
            Find trendy attire at the comfort of your home, your next outfit is
            one click away.
          </p>
          <Link to='/newin'><button className={styles.ctaButton}>View Latest Collection</button></Link>

        </div>
        <div className={styles.heroImageContainer}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62414d0dca994bc08e89bf17dcfb0977370d5e2a567a63404c4ce836d3a03d25?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            className={styles.heroImage}
            alt="Featured collection"
          />
        </div>
      </div>
    </section>

    <section className={styles.productSection}>
      <div className={styles.filterBar}>
        <span className={styles.filterText}>Filter Items By Category Here</span>
        <select className={styles.filterDropdown}>
          <option value="">All Categories</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
          <option value="category3">Category 3</option>
        </select>
      </div>

      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <button className={styles.seeAllButton}>SEE ALL NEW ARRIVALS</button>
    </section>

    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>Welcome to Everyday Finds</h2>
      <p className={styles.aboutText}>
        At Everyday Finds, we believe every woman deserves to feel confident,
        stylish, and comfortable—every single day. We're here to bring you
        carefully curated clothing and accessories designed to celebrate your
        unique beauty and lifestyle. From casual wear to office chic, and
        everything in between, our collection is all about you. Our mission is
        to make your shopping experience seamless, transparent, and tailored to
        your needs. Whether you're looking for the perfect outfit or simply
        exploring, we're here to inspire and support you every step of the way.
        Discover the joy of fashion made with care, just for you. 💖
      </p>
    </section>
    <footer className={styles.footer}>
      <Logo />
      <div className={styles.footerContent}>
        <div className={styles.newsletterSection}>
          <h2 className={styles.newsletterTitle}>
            Join us to get latest updates on upcoming events.
          </h2>
          <NewsletterForm />
          <p className={styles.privacyNote}>
            By signing up you agree to our privacy policies.
          </p>
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.navigationSection}>
            <h3 className={styles.sectionTitle}>Navigate</h3>
            {footerNavLinks.map((link) => (
              <NavigationLink key={link} text={link} />
            ))}
          </div>

          <div className={styles.officialSection}>
            <h3 className={styles.sectionTitle}>Official</h3>
            {officialLinks.map((link) => (
              <NavigationLink key={link} text={link} />
            ))}
          </div>

          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Social</h3>
            {socialLinks.map((link) => (
              <SocialLink key={link.text} {...link} />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © 2024, Everyday Finds. Created By Mad_Bark_Creations
      </div>
    </footer>
  </div>
);

