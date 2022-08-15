import React from 'react';
import styles from '../styles/Hero.module.css';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Hero element</h1>
        <a href="https://dribbble.com/shots/15955423-Yum" target="_blank" rel="noopener noreferrer">Source image</a>
      </div>
      <picture className>
        <img src="https://cdn.dribbble.com/users/3320958/screenshots/15955423/media/ec2fe461084339c3a4d14efae1202847.jpeg?" alt="Hero element" />
      </picture>
    </div>
  );
};
