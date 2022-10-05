import Head from 'next/head';
import { Card } from '../components/Card';
import { Hero } from '../components/Hero';
import { data } from '../dataKelompok.json';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tel-U | Kelompok 2</title>
        <meta name="description" content="Tel-U | Kelompok 2" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <section className={styles.explore}>
          <h2>Data Kelompok 2</h2>
          <div className={styles.cards}>
            {
              data.map((data, i) => (
                <Card key={i} city={data.city} nim={data.nim} title={data.title} body={data.body} img={data.img} id={data.id} />
              ))
            }
          </div>
        </section>
      </main>
    </div>
  )
}