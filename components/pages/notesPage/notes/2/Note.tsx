import React from 'react'
import styles from './Note.module.css'

const Note = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.title}><span>Welcome to my website</span></div>
                <div className={styles.date}><span>May 02, 2024</span></div>
                <div className={styles.content}>
                    
                </div>
            </div>
        </div>
    )
}

export default Note