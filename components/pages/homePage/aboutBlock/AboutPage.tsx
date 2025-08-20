import React from 'react'
import styles from './AboutPage.module.css'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.title}><span>Thomas Pham</span></div>
                <div className={styles.imgWrapper}>
                    <div className={styles.imgContainer}>
                        <Image src={'/images/me/IMG_5859.jpg'} alt="Me" fill />
                    </div>
                    <span className={styles.subtitle}>Me at the Golden State Bridge in San Franciso, California</span>
                </div>
                <div>
                    <p>
                        Hello, I&apos;m a lifelong learner with a passion for programming and mathematics.
                        I started coding in college after pivoting away from medicine, and I&apos;ve been enjoying my journey as a software engineer ever since.
                        I hope to learn from others and continuously grow as an engineer.
                    </p>
                    <br></br>
                    <p>
                        I completed my B.S in Computer Science from UT Dallas, and am currently doing an M.S in Computer Science at UT Austin 🤘. I am interested in machine learning and software development.
                        I have worked at Spacee(startup), Robert Half, and currently Geico Tech.
                        Outside of work, my hobbies include fitness, movies, and League of Legends. I enjoy watching LoL esports, tennis, and more recently college football.
                    </p>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage