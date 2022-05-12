import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

const Home: React.FC<NextPage> = () => {
    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.header} ${styles.raleway} ${styles.shadow} ${styles.round}`}
            >
                <p className={styles.text}>
                    Under Construction
                </p>
            </div>
            <div
                className={`${styles.body} ${styles.raleway} ${styles.shadow} ${styles.round}`}
            >
                <p className={styles.text}>
                    This site is currently in construction, please check back at a later date.
                    For now view my current projects
                </p>
            </div>
        </div>
    )
}
export default Home
