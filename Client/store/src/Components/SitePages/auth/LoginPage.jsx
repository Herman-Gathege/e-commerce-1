import React, { useState } from 'react';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { SignupForm } from '../signup/SignupForm';
import styles from './LoginPage.module.css';

export const LoginPage = () => {
  const [isSignupModalVisible, setSignupModalVisible] = useState(false);

  // Handler to open the signup modal
  const handleSignupButtonClick = () => {
    console.log("Sign up button clicked!");  // Check if the button is clicked
    setSignupModalVisible(true); // Show the signup modal
  };

  // Handler to close the modal
  const handleCloseModal = () => {
    setSignupModalVisible(false); // Hide the modal
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h1 className={styles.title}>My ACCOUNT</h1>
        </div>

        <Input label="Email" type="email" id="email" />
        <Input label="Password" type="password" id="password" />
        <Button variant="primary">LOGIN</Button>

        <div className={styles.links}>
          <a href="#" className={styles.storeLink}>
            RETURN TO STORE
          </a>
          <a href="#" className={styles.forgotLink}>
            Forgot Password
          </a>
        </div>

        <div className={styles.signupSection}>
          <span className={styles.signupText}>Sign Up</span>
          <Button variant="secondary" onClick={handleSignupButtonClick}>
            SIGN UP NOW !
          </Button>
          <SignupForm />
        </div>
      </div>

      {/* Show the modal when isSignupModalVisible is true */}
      {isSignupModalVisible && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContainer}>
            <button className={styles.closeButton} onClick={handleCloseModal}>X</button>
            <SignupForm />
          </div>
        </div>
      )}
    </div>
  );
};
