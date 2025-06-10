import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import { MdOutlineArrowOutward } from "react-icons/md";
import styles from './EmailBlock.module.css'

const EmailBlock = () => {    
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    Get in Touch
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonText}>
                    <MdOutlineArrowOutward />
                    <span>Email</span>

                </div>
            </div>
        </div>
    )
}

export default EmailBlock;
