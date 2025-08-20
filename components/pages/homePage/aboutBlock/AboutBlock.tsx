import React from 'react'
import styles from './AboutBlock.module.css'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'

const AboutBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    About
                </span>

            </div>
            <div className={styles.contentContainer}>
                <Link href={'/about'}>
                    <div className={styles.buttonContainer}>
                        <MdOutlineArrowOutward />
                        <span className={styles.contentText}>Read about me</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AboutBlock