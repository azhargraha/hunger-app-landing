import React, { useState } from 'react';
import { Card } from '../components/Card';
import { restaurants } from '../restaurantData.json';
import styles from '../styles/About.module.css';
import { useForm } from 'react-hook-form';

const About = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const [data, setData] = useState(null);

    const onSubmit = (data) => {
        setData(data);
    };

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
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <h2>React Hook Form</h2>
                <div className={styles.input}>
                    <input placeholder="Enter name" {...register("name", { required: true })} />
                    {errors.name && <p className={styles.error}>Name is required</p>}
                    <select defaultValue="Option A" {...register("option", { required: true })} required>
                        <option value="Option A">Option A</option>
                        <option value="Option B">Option B</option>
                        <option value="Option C">Option C</option>
                    </select>
                    {errors.option && <p className={styles.error}>Option is required</p>}
                    <textarea placeholder="Enter menu" {...register("menu", { required: true })} />
                    {errors.menu && <p className={styles.error}>Menu is required</p>}
                </div>
                <button type="submit">Submit</button>
                {data && <p className={styles.data}>{JSON.stringify(data)}</p>}
            </form>
        </div>
    );
};

export default About;