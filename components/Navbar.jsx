import React from "react";
import styles from '../styles/Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <h1>Hunger Apps</h1>
      </div>
      <ul className={styles.menus}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Favorite</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  )
}