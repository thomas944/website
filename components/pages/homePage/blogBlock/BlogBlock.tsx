import React from 'react';
import styles from './BlogBlock.module.css'
import Link from 'next/link'
import { MdOutlineArrowOutward } from 'react-icons/md'

const BlogBlock = () => {

    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    Notes
                </span>
            </div>
            <div className={styles.contentContainer}>
                <Link href={'/notes'}>
                    <div className={styles.buttonContainer}>
                        <MdOutlineArrowOutward />
                        <span className={styles.contentText}>Browse</span>
                    </div>
                </Link>
            </div>

        </div>

    )
}

export default BlogBlock;

