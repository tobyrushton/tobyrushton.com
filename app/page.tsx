import 'server-only'

import { FC } from 'react'
import styles from '../styles/Home.module.css'
import ThreeBanner from '../components/threeJS/threeBanner'
import Project from '../components/project'

const Page: FC = () => {
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
                    <h2>Projects</h2>
                </div>
            </div>
            <div className={styles.articleContainer}>
                <Project
                    title="NBA Fantasy"
                    link="nba-fantasy.tobyrushton.com"
                    sourceLink="https://github.com/tobyrushton/nba-fantasy"
                >
                    <p>
                        A simple NBA Fantasy application that allows for all
                        current NBA players stats to be searched
                    </p>
                    <p>Built with NextJS, using React, Typescript and SCSS.</p>
                </Project>
                <Project
                    title="UniFriend"
                    link="unifriend.tobyrushton.com"
                    sourceLink="https://github.com/tobyrushton/unifriend"
                >
                    <p>
                        UniFriend is a web application that allows UK university
                        students to find other university students. This project
                        was built for my A Level Computer Science coursework.
                    </p>
                    <p>
                        It is built with NextJS, using React, Typescript, SCSS,
                        Apollo, GraphQL, Prisma and Nexus.
                    </p>
                </Project>
                <Project
                    title="Worldle Unlimited"
                    link="worldleunlimited.co.uk"
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
                    link="sort-search.tobyrushton.com"
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
