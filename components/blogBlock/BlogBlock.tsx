import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import styles from './BlogBlock.module.css'

const BlogBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    Blog
                </span>
            </div>
            <div className={styles.contentContainer}>
                <span className={styles.contentText}>
                    Read about read about read
                </span>
            </div>
        </div>

    )
}

export default BlogBlock;

