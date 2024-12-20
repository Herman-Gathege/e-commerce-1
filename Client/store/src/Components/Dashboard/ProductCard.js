import React from 'react'
import styles from './ProductCard.module.css';


function ProductCard({ image, title, size, price }) {
  return (
    <div className={styles.productCard}>
    <img loading="lazy" src={image} alt={title} className={styles.productImage} />
    <div className={styles.productDetails}>
      <h3 className={styles.productTitle}>{title}</h3>
      <div className={styles.productSize}>{size}</div>
      <div className={styles.productPrice}>Price: {price} kes</div>
      <div className={styles.productActions}>
        <button className={styles.actionButton}>Add to Cart</button>
        <button className={styles.actionButton}>View Item</button>
      </div>
    </div>
  </div>
  )
}

export default ProductCard