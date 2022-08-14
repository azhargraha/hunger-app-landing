import Image from 'next/image';
import React from 'react';
import styles from '../styles/Card.module.css';

export const Card = ({ city, rating, title, body, img }) => {
  return (
    <div>
        <h4>{city}</h4>
        <picture>
            <source srcSet={img} type="image/" />
            <img src={img} alt={title} />
        </picture>
        <h4>Rating: {rating}</h4>
        <h3>{title}</h3>
        <p>{body}</p>
    </div>
  )
};
