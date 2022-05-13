import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ThreeBanner from '../components/threeJS/threeBanner'

const Home: React.FC<NextPage> = () => {
    return (
        <div className={styles.wrapper}>
            <div
                className={`${styles.header} ${styles.banner} ${styles.shadow} ${styles.round}`}
            >
                <ThreeBanner />
            </div>
            <div
                className={`${styles.banner} ${styles.shadow} ${styles.round}`}
            >
                <div className={`${styles.textBox} ${styles.raleway}`}>
                    <p>
                        This site is currently in construction, please check
                        back at a later date.
                    </p>
                    <p>For now view my current projects</p>
                </div>
            </div>
        </div>
    )
}
export default Home
