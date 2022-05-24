import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ThreeBanner from '../components/threeJS/threeBanner'
import Project from '../components/project'

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
                    <p>This site is currently in construction.</p>
                    <p>For now view my current projects</p>
                </div>
            </div>
            <div className={styles.articleContainer}>
                <Project
                    title="Worldle Unlimited"
                    link="https://worldleunlimited.co.uk/"
                    sourceLink="https://github.com/tobyrushton/worldle-unlimited"
                >
                    <p>
                        Worldle Unlimited is a world guessing game based on the
                        popular game Worldle and similar to Wordle.
                    </p>
                    <p>
                        It is built in React using typescript. It uses the
                        context api to manage state and uses local storage in
                        order to perist state across sessions.
                    </p>
                </Project>
                <Project
                    title="Sort-Search Visualiser"
                    link="https://sort-search.tobyrushton.com"
                    sourceLink="https://sort-search.tobyrushton.com"
                >
                    <p>
                        This project is a sort and search algorithm visualiser.
                    </p>
                    <p>
                        It is built in React and using javascript. Redux toolkit
                        was used in order to manage state. With this project I
                        learned about different algorithms and how to implement
                        them.
                    </p>
                </Project>
            </div>
            <div
                className={`${styles.footer} ${styles.banner} ${styles.shadow}`}
                style={{
                    width: '100%',
                    margin: '0',
                }}
            >
                <a
                    href="https://github.com/tobyrushton/tobyrushton.com"
                    rel="noreferrer"
                    target="_blank"
                >
                    View this site on Github
                </a>
            </div>
        </div>
    )
}
export default Home
