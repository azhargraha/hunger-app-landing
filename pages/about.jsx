import React from 'react';
import { Card } from '../components/Card';
import { restaurants } from '../restaurantData.json';
import styles from '../styles/About.module.css';

const About = () => {
    return (
        <div>
            <section className={styles.restaurants}>
                <h2>Restaurant Information</h2>
                <div className={styles.cards}>
                {
                    restaurants.map((data, i) => (
                        <Card key={i} city={data.city} rating={data.rating} title={data.title} body={data.body} img={data.img} id={data.id} />
                    ))
                }
                </div>      
            </section>
        </div>
    );
};

export default About;