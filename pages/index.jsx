import Head from 'next/head';
import { Card } from '../components/Card';
import { Hero } from '../components/Hero';
import { restaurants } from '../restaurantData.json';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hunger Apps - Azhar Nugraha</title>
        <meta name="description" content="Hunger Apps - Azhar Nugraha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <section className={styles.explore}>
          <h2>Explore Restaurant</h2>
          <div className={styles.cards}>
            {
              restaurants.map((data, i) => (
                <Card key={i} city={data.city} rating={data.rating} title={data.title} body={data.body} img={data.img} id={data.id} />
              ))
            }
          </div>
        </section>
      </main>
    </div>
  )
}