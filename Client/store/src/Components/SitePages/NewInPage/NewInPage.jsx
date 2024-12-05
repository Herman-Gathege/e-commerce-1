import React from "react";
// import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";
import styles from "./NewInPage.module.css";


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

export const NewInPage = () => {
  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <div className={styles.breadcrumb}>
        <div>Home / New In</div>
        <h1 className={styles.pageTitle}>New Arrivals</h1>
        <div className={styles.itemCount}>Showing 50 Items</div>
      </div>

      <div className={styles.filterSection}>
        {/* <div className={styles.filterBar}>
          <div>Filter Items By Category Here</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c14302659845d8875f133d677a0d53b8e650608bf678ba1264b825d4f723fa1d?placeholderIfAbsent=true&apiKey=4954cd0778ee41b3916c35610d52c9fb"
            alt=""
            className={styles.filterIcon}
          />
        </div> */}
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

        {/* <div className={styles.productGrid}>
          <div className={styles.productRow}>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                size={product.size}
                price={product.price}
              />
            ))}
          </div>
        </div> */}

        <div className={styles.pagination}>
          <div>1 2 3</div>
          <div className={styles.nextButton}>Next</div>
        </div>
      </div>

      
    </div>
    
  );
};
