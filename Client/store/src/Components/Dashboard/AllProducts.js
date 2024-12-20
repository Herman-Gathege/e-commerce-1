// src/components/AllProducts.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard'; // Reuse the card for displaying product info
import AddItemForm from './AddItemForm'; // Reuse form for adding products
import './AllProducts.css';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  
  // Fetch products on component mount
  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  // Handle adding a product
  const handleAddProduct = (newProduct) => {
    setProducts(prevProducts => [...prevProducts, newProduct]);
  };

  // Handle deleting a product
  const handleDeleteProduct = (productId) => {
    axios.delete(`http://localhost:5000/products/${productId}`)
      .then(() => {
        setProducts(products.filter(product => product.id !== productId));
      })
      .catch(error => console.error("Error deleting product:", error));
  };

  // Handle editing a product (this could be expanded to a form for editing)
  const handleEditProduct = (productId) => {
    // You can add logic to open a modal or redirect to an edit form
    console.log("Edit product:", productId);
  };

  return (
    <div>
      <h1>All Products</h1>
      <AddItemForm onAddItem={handleAddProduct} />
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} item={product} onDelete={handleDeleteProduct} onEdit={handleEditProduct} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
