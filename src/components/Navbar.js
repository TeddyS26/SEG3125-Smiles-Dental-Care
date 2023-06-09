import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from './photos/home/logo.png';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img 
          src={logo}
          alt="Logo" 
          className={styles['navbar-logo']}
        />
      </Link>

      <div className={styles['navbar-links']}>
        <Link to="/booking" className={`${styles['nav-link']} ${location.pathname === '/booking' ? styles['active-link'] : ''}`}>Booking</Link>
        <Link to="/services" className={`${styles['nav-link']} ${location.pathname === '/services' ? styles['active-link'] : ''}`}>Services</Link>
        <Link to="/professionals" className={`${styles['nav-link']} ${location.pathname === '/professionals' ? styles['active-link'] : ''}`}>Our Professionals</Link>
        <Link to="/contact" className={`${styles['nav-link']} ${location.pathname === '/contact' ? styles['active-link'] : ''}`}>Contact & About Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;