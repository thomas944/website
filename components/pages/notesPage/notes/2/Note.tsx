import React from 'react'
import styles from './Note.module.css'

const Note = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.title}><span>How I made this website</span></div>
                <div className={styles.date}><span>May 02, 2024</span></div>
                <section className={styles.content}>
                    
                    <div className={styles.sectionHeader}><span>Motivation</span></div>
                    <p className={styles.p}>
                        Despite my interest in programming, for the longest time I avoided web development.
                        My first attemps at learning HTML, CSS, and JS were <em>pre-ChatGPT</em>, where I would
                        spend hours in 10-hour courses and still feel like I couldn't build anything original.
                        The phrase "tutorial hell" pretty much sums it up.
                    </p>
                    <br />
                    <p className={styles.p}>
                        Somehow, React was more intuitive to me than HTML or JS. Things finally started
                        making sense in the summer of 2023 during my internship where most of my work was
                        on front end tasks. Thankfully, ChatGPT was also around that time, or I probably would have
                        struggled a lot. I gained a lot of confidence from that experience, and I realized
                        web development wasn't so bad after all
                    </p>
                    <br />
                    <p className={styles.p}>
                        Since then, I've learned a ton and wanted to challenge myself by building a website
                        from scratch. I hope to share how that process went here.
                    </p>
                

                </section>
            </div>
        </div>
    )
}

export default Note