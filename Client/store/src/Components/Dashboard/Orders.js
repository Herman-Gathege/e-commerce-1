// src/components/Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching orders:", error));
  }, []);

  const handleApplyDiscount = (orderId) => {
    axios.put(`http://localhost:5000/orders/${orderId}/applyDiscount`, { discount })
      .then(response => {
        alert("Discount applied successfully!");
        setOrders(orders.map(order => order.id === orderId ? response.data : order));
      })
      .catch(error => console.error("Error applying discount:", error));
  };

  return (
    <div>
      <h1>Orders</h1>
      <input
        type="number"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
        placeholder="Discount Percentage"
      />
      <button onClick={() => handleApplyDiscount(order.id)}>Apply Discount</button>

      <div>
        {orders.map(order => (
          <div key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Total: {order.total}</p>
            {/* Other order details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
