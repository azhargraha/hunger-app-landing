import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { restaurants } from '../../restaurantData.json';
import { Card } from "../../components/Card";
import styles from '../../styles/Menu.module.css';

const Menu = () => {
    const [data, setData] = useState({});
    const { query } = useRouter();
    const { id } = query;

    useEffect(() => {
        const [ result ] = restaurants.filter((restaurant) => {
            return restaurant.id === parseInt(id);
        });

        setData(result);
    }, [id]);

    return (
        <div>
            <section className={styles.container}>
                {
                    data && (
                        <>
                            <h2>{data.title}&apos;s Menu</h2>
                            <Card id={data.id} rating={data.rating} img={data.img} menus={data.menus} title={data.title} /> 
                        </>
                    )
                }
            </section>
        </div>
    );
};

export default Menu;