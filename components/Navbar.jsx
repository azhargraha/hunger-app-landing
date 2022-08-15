import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from 'next/image';
React.useLayoutEffect = React.useEffect;
import styles from '../styles/Navbar.module.css';

import hamburgerOpen from '../public/assets/hamburger-open.svg';
import hamburgerClose from '../public/assets/hamburger-close.svg';

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export const Navbar = () => {
  const [width] = useWindowSize();
  const [isMobile, setIsMobile] = useState(width <= 590);
  const [isToggle, setIsToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsToggle(!isToggle);
  };

  useEffect(() => {
    if (width > 590) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <a href="#">Hunger Apps</a>
      </div>
      {
        isMobile ? 
          <button className={styles.toggle} onClick={handleToggle}>
            <Image src={isToggle ? hamburgerClose : hamburgerOpen} alt="test" />
          </button> :
          <ul className={styles.menus_close}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
      }
      {
        (isToggle && isMobile) &&
          <ul className={styles.menus_open}>
            <li><a href="#">Home</a></li>
            <li><a href="#">Favorite</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
      }
    </nav>
  );
};