import React from "react";
import styles from "./styles/AboutUs.module.css";




export const AboutUs = () => {
  return (
    <div className={styles.aboutUsContainer}>
      

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
