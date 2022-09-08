import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const About = () => {
    const isUserLeft = true;
    const [data, setData] = useState();
    const [error, setError] = useState('');

    const restaurantPromise = () => {
        return new Promise((resolve, reject) => {
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
    
            if (!isUserLeft) {
                resolve(restaurantData);
            } else {
                reject('User has left');
            }
        });
    };

    useEffect(() => {
        // .then .catch method
        // const cobaPromise = restaurantPromise();
        // cobaPromise
        //     .then((res) => setData(res))
        //     .catch((err) => setError(err));

        // async await
        async function cobaAsync() {
            try {
                const data = await restaurantPromise();
                setData(data);
            } catch (err) {
                setError(err);
            }
        }
        cobaAsync();
    }, []);

    return (
    <div>
        {
            data ? data.map((item, i) => (
                <div key={i} style={{ marginBottom: '5rem' }}>
                    <Image src={item.img} alt={item.title} width={500} height={500} />
                    <div>{i + 1}. <strong style={{ color: 'green' }}>{item.title}</strong> <span>({item.city})</span></div>
                    <p>Rating: {item.rating}</p>
                    <p>{item.body}</p>
                </div>
            )) : <div>error: <strong style={{ color: 'red' }}>{error}</strong></div>
        }
    </div>
  );
};

export default About;