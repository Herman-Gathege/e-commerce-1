// src/components/Notifications.js
import React, { useState } from 'react';
import axios from 'axios';

const Notifications = () => {
  const [message, setMessage] = useState('');

  const handleSendNotification = () => {
    axios.post('http://localhost:5000/notifications', { message })
      .then(() => {
        alert("Notification sent!");
        setMessage(''); // Clear the input field after sending
      })
      .catch(error => console.error("Error sending notification:", error));
  };

  return (
    <div>
      <h1>Send Notifications</h1>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter your notification message"
      />
      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
};

export default Notifications;
