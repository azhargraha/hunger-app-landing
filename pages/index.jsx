import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';

export default function Home() {
  const restaurantData = [
    {
      city: 'Kota Bandung',
      rating: 4.5,
      title: 'Lorem Ipsum Dolor',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ligula sapien, in tincidunt urna aliquam a. Cras in efficitur est, ultrices semper justo.',
      img: 'https://i.pinimg.com/564x/4f/a1/d9/4fa1d99d94bf062fd0aa8bac1b228837.jpg'
    },
    {
      city: 'Kota Bandung',
      rating: 4.5,
      title: 'Lorem Ipsum Dolor',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ligula sapien, in tincidunt urna aliquam a. Cras in efficitur est, ultrices semper justo.',
      img: 'https://i.pinimg.com/564x/df/83/ee/df83ee083874e8610ae39192b80d8c34.jpg'
    },
    {
      city: 'Kota Bandung',
      rating: 4.5,
      title: 'Lorem Ipsum Dolor',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse volutpat ligula sapien, in tincidunt urna aliquam a. Cras in efficitur est, ultrices semper justo.',
      img: 'https://i.pinimg.com/564x/be/88/cb/be88cbd69d15166de000274a9d821cbe.jpg'
    },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Hunger Apps - Azhar Nugraha</title>
        <meta name="description" content="Hunger Apps - Azhar Nugraha" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <Hero />
        <section className={styles.explore}>
          <h2>Explore Restaurant</h2>
          <div className={styles.cards}>
            {
              restaurantData.map((data, i) => (
                <Card key={i} city={data.city} rating={data.rating} title={data.title} body={data.body} img={data.img} />
              ))
            }
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>copyright @ 2020 - Hunger Apps</p>
      </footer>
    </div>
  )
}
