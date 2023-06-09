import React from 'react';
import styles from './OurProfessionalsPage.module.css';
import ortho from './photos/proffesionals/ortho2.jpg';
import oral from './photos/proffesionals/oral.jpg';
import cosmetic from './photos/proffesionals/cosmetic2.jpeg';
import general from './photos/proffesionals/general.jpg';
import dentalAnxietyBadge from './photos/proffesionals/badge.png'; // Import the badge image

const OurProfessionalsPage = () => {
  {/* Create box for each proffesional */}
  const professionals = [
    {
      id: 1,
      name: 'Dr. Yassine, Mostafa',
      title: 'Orthodontist',
      isAnxietyExperienced: true,
      description: [
        'Holds a Doctor of Dental Surgery (DDS)',
        'Completed additional education and training in orthodontics.',
        'Specializes in diagnosing and correcting teeth and jaws that are misaligned.',
        'Expert in braces, retainers, and other appliances to realign teeth.',
        'Offers treatment options such as metal braces, clear aligners, and Invisalign.',
        'Can treat crowded teeth, overbites, underbites, and other alignment issues.'
      ],
      image: ortho,
    },
    {
      id: 2,
      name: 'Dr. Colasante, Jonathan',
      title: 'Oral Surgeon',
      isAnxietyExperienced: false,
      description: [
        'Holds a DMD degree along with additional surgical training.',
        'Specializes in surgical procedures of the mouth, jaw, and face.',
        'Performs tooth extractions, especially impacted wisdom teeth.',
        'Skilled in corrective jaw surgery, dental implant placement, and treatment of facial trauma.',
        'Capable of diagnosing and treating oral cancer and other diseases.'
      ],
      image: oral,
    },
    {
      id: 3,
      name: 'Dr. Yeung, Nicholas',
      title: 'Dental Cosmetic Surgeon',
      isAnxietyExperienced: false,
      description: [
        'Holds a Doctor of Osteopathic Medicine (DO) degree.',
        'Completed surgical residency and additional training in cosmetic or plastic surgery.',
        'Specializes in a wide range of cosmetic and surgical procedures aimed at improving the aesthetics and functionality of your smile. ',
        'Skilled in creating personalized smile makeovers, combining various cosmetic procedures to enhance the appearance of your teeth and gums',
        'Experienced in the placement and restoration of dental implants, providing a long-lasting solution for missing teeth.'
      ],
      image: cosmetic,
    },
    {
      id: 4,
      name: 'Dr. Bhandari, Vivek',
      title: 'General Dentist',
      isAnxietyExperienced: true,
      description: [
        'Holds a DDS.',
        'Primary dental care provider for patients of all ages.',
        'Performs routine dental check-ups, teeth cleanings, and oral examinations.',
        'Offers services such as fillings, crowns, and bridges.',
        'Experienced with tooth extractions and root canal treatments.',
        'Provides education on oral hygiene and preventive dental care.'
      ],
      image: general,
    }
  ];

  return (
    <div className={styles.professionals}>
      {professionals.map(professional => (
        <div key={professional.id} className={styles.professional}>
          {/* Box Header Information */}
          <div className={styles.imageTitleContainer}>
            <h2 className={styles.professionalName}>
              {professional.name}
              {professional.isAnxietyExperienced && (
                <div className={styles.tooltip}>
                  <img src={dentalAnxietyBadge} alt="Dental Anxiety Expert" className={styles.dentalAnxietyBadge} />
                  <span className={styles.tooltiptext}>This professional is a good fit for people with dental anxiety</span>
                </div>
              )}
            </h2>
            <h2 className={styles.professionalTitle}>{professional.title}</h2>
          </div>
          {/* Box Body Description */}
          <div className={styles.professionalContent}>
            <img src={professional.image} alt="professional" className={styles.professionalImage} />
            <ul className={styles.professionalDescription}>
              {professional.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurProfessionalsPage;