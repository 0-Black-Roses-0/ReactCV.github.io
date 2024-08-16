import React, { useState } from 'react';
import styles from '../style/login.module.css';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('First Name:', firstName, 'Phone Number:', phoneNumber, 'Email:', email, 'Password:', password);
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.loginTitle}>We are happy to see you Here!</h2>
        
        <div className={styles.inputGroup}>
          <label>First name & Last name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Phone number</label>
          <input
            type="Text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className={styles.loginButton}>Login</button>
        <p className={styles.signupLink}>If you already have an account click on <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Login;
