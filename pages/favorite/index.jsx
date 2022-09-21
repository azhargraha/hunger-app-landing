import React, { useState } from 'react';
import { restaurants } from '../../restaurantData.json';
import styles from '../../styles/Favorite.module.css';
import { Card } from '../../components/Card';

const Favorite = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <section className={styles.container}>
        <header className={styles.header}>
          <h2>Restaurant Menus</h2>
          <div className={styles.counter}>
            <button className={styles.minus} onClick={() => setCount(count - 1)} disabled={count <= 1} />
            <h5>{count}</h5>
            <button className={styles.plus} onClick={() => setCount(count + 1)} />
          </div>
        </header>
        <div className={styles.restaurants}>
          {restaurants.map((data, i) => (
            <Card key={i} id={data.id} rating={data.rating} img={data.img} menus={data.menus} title={data.title} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Favorite;