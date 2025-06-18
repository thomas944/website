import React from 'react'
import { notesData } from '@/data/notes'
import styles from './NotesBlock.module.css'

const NotesBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.titleText}>
                    Notes
                </div>
                <ul className={styles.notes}>
                    {notesData.map((entry, index) => (
                        <li
                            key={index}
                            className={styles.note}
                        >
                            <span className={styles.noteDateText}>
                                {entry.date}
                            </span>
                            <span className={styles.noteTitleText}>
                                {entry.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NotesBlock