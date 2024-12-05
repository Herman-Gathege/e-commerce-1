import React from "react";
import styles from "../ContactPage.module.css";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8c4184eb4636434422c4857815b25874b831a35f943cf784630e6a41be24b69e?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      text: "info@example.com",
      type: "email",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/673f735ec05712e331bef83cf616e6bd39052ff326911c2d37d80a3d14c69c28?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      text: "001985512-854",
      type: "phone",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2e545d89138509bd6ceb7bcdcc3ed8060c8fe85da5b0e8f0cc6034bd1c3db44a?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb",
      text: "John Smith 123 Main Street Amsterdam, NH 1000 Netherlands",
      type: "address",
    },
  ];

  return (
    <div className={styles.contactInfo}>
      {contactDetails.map((detail, index) => (
        <div
          key={index}
          className={
            detail.type === "address" ? styles.addressInfo : styles.infoItem
          }
        >
          <img
            loading="lazy"
            src={detail.icon}
            className={styles.infoIcon}
            alt={`${detail.type} icon`}
          />
          <div className={styles.infoText}>{detail.text}</div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;
