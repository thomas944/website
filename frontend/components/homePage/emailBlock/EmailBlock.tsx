import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import { MdOutlineArrowOutward } from "react-icons/md";
import styles from './EmailBlock.module.css'

const email = "phamdwtn@gmail.com"

const EmailBlock = () => {    
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <div className={styles.largeContainerView}>
                    <span className={styles.titleText}>
                        Get in Touch
                    </span>
                </div>
                <div className={styles.smallContainerView}>
                    <span className={styles.titleText}>Get in</span>
                    <span className={styles.titleText}>Touch</span>
                </div>
                

            </div>
            <div className={styles.buttonContainer}>
                <a href={`mailto:${email}`}  className={styles.buttonText}>
                    <MdOutlineArrowOutward />
                    <span>Email</span>

                </a>
            </div>
        </div>
    )
}

export default EmailBlock;
