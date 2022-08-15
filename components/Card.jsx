import Image from 'next/image';
import React from 'react';
import styles from '../styles/Card.module.css';

export const Card = ({ city, rating, title, body, img }) => {
  return (
    <div className={styles.container}>
        <picture className={styles.thumbnail}>
          <div className={styles.city}>
            <h5>{city}</h5>
          </div>
          <img src={img} alt={title} />
        </picture>
        <section className={styles.body}>
          <h5>Rating: {rating}</h5>
          <h3>{title}</h3>
          <p>{body}</p>
        </section>
    </div>
  );
};
