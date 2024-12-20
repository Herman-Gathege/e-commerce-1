import React from 'react';
import AllProducts from './AllProducts';  // Import AllProducts
import Notifications from './Notifications';  // Import Notifications
import Orders from './Orders';  // Import Orders
import Sales from './Sales';  // Import Sales
import './Dashboard.css';  // Import the CSS for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <AllProducts />  {/* Render AllProducts component */}
        <Notifications />  {/* Render Notifications component */}
        <Orders />  {/* Render Orders component */}
        <Sales />  {/* Render Sales component */}
      </div>
    </div>
  );
};

export default Dashboard;
