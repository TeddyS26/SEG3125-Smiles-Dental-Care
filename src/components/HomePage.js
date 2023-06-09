import React from 'react';
import styles from './HomePage.module.css';
import logo from './photos/home/logo.png';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}>
        {/* Logo and Button */}
        <img src={logo} alt="Dental Services Logo" className={styles.logo} />
        <Link to="/booking" className={styles.bookButton}>Book Now</Link>
      </div>
    </div>
  );
};

export default HomePage;