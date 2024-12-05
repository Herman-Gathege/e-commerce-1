import React from "react";
import styles from "../ContactPage.module.css";

const SocialLinks = () => {
  const socialLinks = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7d35049f6d76b9146d60a49ae7d005fcdd4e6de05d317799f83146c20677bfac?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      handle: "@exampleAcount",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/69868f85cdb08512b4bd7b1cb549b5924fdf00d9b6c6f99e7050c6d468d04b29?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      handle: "@exampleAcount",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/594fb23578d642a9e65151ea936fd1d4be3019e62d9c8af8e909056338bb34fe?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      handle: "@exampleAcount",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8552ae67d3f5f1e81e96cf76662500cb594d2bfc996270de1ba75697dd12972?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      handle: "@exampleAcount",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9a95b97a6b5b246251a2b82ef63273755c330b8daadcad28bf8811f34f03264?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      handle: "@exampleAcount",
    },
  ];

  return (
    <div className={styles.socialSection}>
      <div className={styles.socialTitle}>Social</div>
      {socialLinks.map((link, index) => (
        <div key={index} className={styles.socialLink}>
          <img
            loading="lazy"
            src={link.icon}
            className={styles.socialIcon}
            alt="Social media icon"
          />
          <div className={styles.infoText}>{link.handle}</div>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;
