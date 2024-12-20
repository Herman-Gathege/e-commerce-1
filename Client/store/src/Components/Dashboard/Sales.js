// src/components/Sales.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Sales = () => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/sales')
      .then(response => setSales(response.data))
      .catch(error => console.error("Error fetching sales data:", error));
  }, []);

  return (
    <div>
      <h1>Sales</h1>
      <div>
        {sales.map(sale => (
          <div key={sale.id}>
            <p>Product Name: {sale.productName}</p>
            <p>Quantity Sold: {sale.quantity}</p>
            <p>Total Sale: {sale.totalSale}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
