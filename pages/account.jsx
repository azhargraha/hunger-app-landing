import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import styles from '../styles/Account.module.css';
import Image from 'next/image';

const Account = () => {
    const { data: session } = useSession();
    
    if (session) {
        return (
            <div className={styles.container}>
                <div className={styles.picture}>
                    <Image src={session.user.image} alt="Profile picture" layout="fill" objectFit="cover" />
                </div>
                <p>
                    Signed in as <span>{session.user.name}</span>
                </p>
                <button onClick={signOut}>Sign out</button>    
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <p>Not signed in</p>
            <button onClick={signIn}>Sign in</button>    
        </div>
    )
};

export default Account;