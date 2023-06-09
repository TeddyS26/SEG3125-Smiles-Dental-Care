import React from 'react';
import styles from './ServicesPage.module.css';
import cleaning from './photos/services/cleaning.jpg';
import restore from './photos/services/restore.jpg';
import cosmetic from './photos/services/cosmetic.jpeg';
import ortho from './photos/services/ortho.jpeg';
import oral from './photos/services/oral.jpeg';
import gum from './photos/services/gum.jpeg';
import pediatric from './photos/services/pediatric.jpeg'
import endo from './photos/services/endo.jpg'

const ServicesPage = () => {
  {/* Create box for each service */}
  const services = [
    {
      id: 1,
      title: 'Teeth Cleaning and Check-Up',
      description: [
        'Routine dental cleaning',
        'Comprehensive oral examination',
        'X-rays for dental assessment',
        'Diagnosis of dental issues'
      ],
      image: cleaning,
      price: '$150'
    },
    {
      id: 2,
      title: 'Restorative Dentistry',
      description: [
        'Fillings (e.g., amalgam, composite)',
        'Dental crowns and bridges',
        'Dental implants',
        'Dentures (partial or complete)'
      ],
      image: restore,
      price: '$1500'
    },
    {
      id: 3,
      title: 'Cosmetic Dentistry',
      description: [
        'Teeth whitening',
        'Dental veneers',
        'Tooth reshaping',
        'Dental bonding'
      ],
      image: cosmetic,
      price: '$2000'
    },
    {
      id: 4,
      title: 'Orthodontics',
      description: [
        'Traditional braces',
        'Invisalign or clear aligners',
        'Retainers'
      ],
      image: ortho,
      price: '$1350'
    },
    {
      id: 5,
      title: 'Oral Surjery',
      description: [
        'Tooth extraction',
        'Wisdom teeth removal',
        'Dental implants placement'
      ],
      image: oral,
      price: '$400'
    },
    {
      id: 6,
      title: 'Periodontal (Gum) Treatment',
      description: [
        'Scaling and root planing',
        'Periodontal maintenance',
        'Gum grafting'
      ],
      image: gum,
      price: '$250'
    },
    {
      id: 7,
      title: 'Pediatric Dentistry',
      description: [
        'Dental check-ups for children',
        'Fluoride treatments',
        'Dental sealants',
        'Education on oral hygiene for kids'
      ],
      image: pediatric,
      price: '$150'
    },
    {
      id: 8,
      title: 'Endodontics',
      description: [
        'Root canal treatment',
        'Apicoectomy (root-end surgery)'
      ],
      image: endo,
      price: '$350'
    }
  ];

  {/* Box layout and structure */}
  return (
    <div className={styles.services}>
      {services.map(service => (
        <div key={service.id} className={styles.service}>
          <div className={styles.imageTitleContainer}>
            <div className={styles.imageContainer}>
              <img src={service.image} alt="service" className={styles.serviceImage} />
              <h2 className={styles.serviceTitle}>{service.title}</h2>
            </div>
          </div>
          <ul className={styles.serviceDescription}>
            {service.description.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
          <div className={styles.servicePrice}>{service.price}</div>
        </div>
    ))}
    </div>
  );
};

export default ServicesPage;
