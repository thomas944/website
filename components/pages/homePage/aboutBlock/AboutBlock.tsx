import React from 'react'
import { colors } from '@/utils/colors'
import styles from './AboutBlock.module.css'
import Link from 'next/link'

const AboutBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <Link href={'/about'}>
                    <span className={styles.titleText}>
                        About
                    </span>
                </Link>
                
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentText}>
                    Read more about me
                    {/* Hello, I am grad student at UT Austin interested in software development and machine learning */}
                </div>
            </div>
        </div>
    )
}

export default AboutBlock