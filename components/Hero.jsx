import React from 'react';
import styles from '../styles/Hero.module.css';
import Link from 'next/link';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Telkom University</h1>
        <p>Telkom University, also referred to by its acronym of Tel-U, is a private university located in Bandung, West Java, Indonesia. It was established in 2013 with four institutions, which were under Telkom Indonesia through its education-focused wing, Telkom Education Foundation, were merged to form the university.</p>
        <Link href="https://smb.telkomuniversity.ac.id/" passHref><a target="_blank" rel="noopener noreferrer">Informasi Pendaftaran</a></Link>
      </div>
      <picture className>
        <img src="https://anaktelkom.com/wp-content/uploads/2021/08/Gedung-Bangkit-Telkom-University.jpg" alt="Hero element" />
      </picture>
    </div>
  );
};
