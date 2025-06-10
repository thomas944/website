import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import styles from './BlogBlock.module.css'
import Link from 'next/link'

const BlogBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    Blog
                </span>
            </div>
            <div className={styles.contentContainer}>
                <Link href={'/blog'}>
                    <span className={styles.contentText}>
                        Read about read about read
                    </span>
                </Link>
            </div>

        </div>

    )
}

export default BlogBlock;

