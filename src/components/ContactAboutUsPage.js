import React from 'react';
import styles from './ContactAboutUsPage.module.css';

const ContactAboutUsPage = () => {
  return (
    <div className={styles.container}>

      {/* About Us Section */}
      <div className={styles.section}>
        <div className={styles.header}>
          <h2>About Us</h2>
        </div>
        <div className={styles.content}>
          <p>
            Welcome to Smiles Dental Clinic, where we are dedicated to providing exceptional dental care with a focus on patient comfort and satisfaction.<br></br>
            Our team of highly skilled dental professionals brings years of experience and expertise to deliver comprehensive oral health solutions tailored to your needs.<br></br>
            Equipped with advanced dental technology and state-of-the-art facilities, we ensure that our patients receive the highest quality of care in a comfortable and modern environment.
          </p>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className={styles.section}>
        <div className={styles.header}><h2>Contact Us</h2></div>
        <div className={`${styles.content} ${styles.contactContent}`}>
          <div className={styles.contactInfo}>
            
            <div className={styles.contactSubSection}>
              <strong>Address:</strong>
              <div>75 Laurier Ave E, Ottawa, ON K1N 6N5</div>
            </div>
            
            <div className={styles.contactSubSection}>
              <strong>Hours:</strong>
              <div>Monday: 10:00am to 7:00pm</div>
              <div>Tuesday: 9:00am to 5:00pm</div>
              <div>Wednesday: 9:00am to 5:00pm</div>
              <div>Thursday: 9:00am to 5:00pm</div>
              <div>Friday: 8:00am to 3:00pm</div>
            </div>
            
            <div className={styles.contactSubSection}>
              <strong>Contact Details:</strong>
              <div>Email: smiles.dental.care@gmail.com</div>
              <div>Phone: +1 (613) 223-5042</div>
            </div>
          </div>
          
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.4836096027057!2d-75.68828488480214!3d45.42308094111536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05077d7933af%3A0xf211c5a2db2e2dd6!2s75%20Laurier%20Ave%20E%2C%20Ottawa%2C%20ON%20K1N%206N5%2C%20Canada!5e0!3m2!1sen!2sus!4v1607038390600!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactAboutUsPage;