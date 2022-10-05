import Link from 'next/link';
import React from 'react';
import styles from '../styles/Card.module.css';

export const Card = ({ id, city, nim, title, body, img, menus }) => {
  return (
    <Link href='/' passHref>
      <a>
        <div className={styles.container}>
            <picture className={styles.thumbnail}>
              <div className={styles.city}>
                <h5>{city}</h5>
              </div>
              <img src={img} alt={title} />
            </picture>
            <section className={styles.body}>
              <h5>NIM: {nim}</h5>
              <h3>{title}</h3>
              <p>{body}</p>
              {
                menus && (
                  <ol className={styles.menus}>
                    <h4>Menus:</h4>
                    {
                      menus.map((menu, idx) => (
                        <li key={idx}>
                          <p>{idx + 1}. {menu.name}</p>
                        </li>
                      ))
                    }
                  </ol>
                )
              }
            </section>
        </div>
      </a>
    </Link>
  );
};
