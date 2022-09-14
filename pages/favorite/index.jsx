import React from 'react';
import { restaurants } from '../../restaurantData.json';
import styles from '../../styles/Favorite.module.css';
import { Card } from '../../components/Card';

const Favorite = () => {
  return (
    <div>
      <section className={styles.container}>
        <h2>Restaurant Menus</h2>
        <div className={styles.restaurants}>
          {
            restaurants.map((data, i) => (
              <Card key={i} id={data.id} rating={data.rating} img={data.img} menus={data.menus} title={data.title} />
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Favorite;