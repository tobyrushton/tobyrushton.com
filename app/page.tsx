import 'server-only'

import React from 'react'
import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import ThreeBanner from '../components/threeJS/threeBanner'
import Project from '../components/project'

const Page: React.FC<NextPage> = () => {
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
                    <p>It is built in React with Typescript.</p>
                </Project>
                <Project
                    title="Sort-Search Visualiser"
                    link="https://sort-search.tobyrushton.com"
                    sourceLink="https://github.com/tobyrushton/sort-search-visualiser"
                >
                    <p>
                        This project is a web application that visualises
                        different sort and search algorithms.
                    </p>
                    <p>
                        It is built in React with Javascript and uses Redux
                        toolkit in order to manage state.
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
                <a
                    href="https://github.com/tobyrushton"
                    rel="noreferrer"
                    target="_blank"
                >
                    Github Profile
                </a>
            </div>
        </div>
    )
}
export default Page
