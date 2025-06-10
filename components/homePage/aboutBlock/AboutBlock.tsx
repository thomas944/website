import React from 'react'
import { colors } from '@/utils/colors'
import styles from './AboutBlock.module.css'

const AboutBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    About
                </span>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    Hello, I am grad student at UT Austin interested in software development and machine learning
                </div>
            </div>
        </div>
    )
}

export default AboutBlock