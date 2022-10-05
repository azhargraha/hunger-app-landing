import React, { useEffect, useLayoutEffect, useState } from "react";
import Image from 'next/image';
React.useLayoutEffect = React.useEffect;
import styles from '../styles/Navbar.module.css';
import Link from "next/link";
import { useSession } from 'next-auth/react';

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
  const { data: session } = useSession();
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
        <Link href="/">Tel-U</Link>
      </div>
      {
        isMobile ? 
          <button className={styles.toggle} onClick={handleToggle}>
            <Image src={isToggle ? hamburgerClose : hamburgerOpen} alt="test" />
          </button> :
          <ul className={styles.menus_close}>
            <li><Link href="https://github.com/azhargraha/hunger-app-landing" passHref><a target="_blank" rel="noopener noreferrer">Github</a></Link></li>
            <li><Link href="/account">{session ? session.user.name : 'Sign in'}</Link></li>
          </ul>
      }
      {
        (isToggle && isMobile) &&
          <ul className={styles.menus_open}>
            <li><Link href="https://github.com/azhargraha/hunger-app-landing" passHref><a target="_blank" rel="noopener noreferrer">Github</a></Link></li>
            <li><Link href="/account">Sign in</Link></li>
          </ul>
      }
    </nav>
  );
};