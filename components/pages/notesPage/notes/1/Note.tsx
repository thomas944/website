import React from 'react'
import styles from './Note.module.css'
const Note = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.title}><span>Welcome to my website</span></div>
                <div className={styles.date}><span>May 02, 2024</span></div>
                <div className={styles.content}>
                    <p>
                        Hello, thanks for stopping by and welcome 😊.
                    </p>
                    <p>
                        Things are still under development, but I wanted to create a place where I can share updates on my projects, topics I'm currently interested in, and life events.
                    </p>
                    <br></br>
                    <p>
                        Stay tuned, hopefully more coming soon!
                    </p>
                    <p>- Thomas Pham</p>
                </div>
            </div>
        </div>
    )
}

export default Note