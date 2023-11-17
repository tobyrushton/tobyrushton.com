import 'server-only'

import React from 'react'
import styles from '../styles/Home.module.css'

interface props {
    title: string
    link: string
    sourceLink: string
    children: React.ReactNode
}

const Project: React.FC<props> = ({ title, link, sourceLink, children }) => {
    return (
        <div className={`${styles.article} ${styles.round} ${styles.shadow}`}>
            <div
                className={`${styles.textBox} ${styles.raleway}`}
                style={{ display: 'flex', flexDirection: 'column', flex: '1' }}
            >
                <h2>{title}</h2>
                {children}
                <div className={styles.anchorWrapper}>
                    <a
                        href={`https://${link}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link}
                    </a>
                    <a href={sourceLink} target="_blank" rel="noreferrer">
                        View on Github!
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
