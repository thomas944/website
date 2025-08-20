import React from 'react'
import styles from './Note.module.css'
import Image from 'next/image'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { StyleRegistry } from 'styled-jsx'

const Note = () => {
    const colors = [
        { name: 'Dark Orange', color: '#E68D00', subText: '#E68D00', subTextColor: '#38435A' },
        { name: 'Dark Gray', color: '#242424', subText: '#242424', subTextColor: '#D4D4D4' },
        { name: 'Black', color: '#000000', subText: '#000000', subTextColor: '#D4D4D4' },
        { name: 'Dark Blue', color: '#38435A', subText: '#38435A', subTextColor: '#D4D4D4' },
        { name: 'Light Blue', color: '#95B7DF', subText: '#95B7DF', subTextColor: '#38435A' },
        { name: 'Gray', color: '#D4D4D4', subText: '#D4D4D4', subTextColor: '#38435A' }
    ]

    //  const colors = [
    //     { name: 'Bright Orange', color: '#E68D00' },
    //     { name: 'Light Blue', color: '#95B7DF' },
    //     { name: 'Dark Gray', color: '#FF9D00' },
    //     { name: 'DarkBlue', color: '#38435A' },
    //     { name: 'White', color: '#D4D4D4' },
    //     { name: 'Black', color: '#000000' }
    // ]

    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <div className={styles.title}><span>How I made this website</span></div>
                <div className={styles.date}><span>May 02, 2024</span></div>
                <div className={styles.content}>
                    <section className={styles.section}>
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
                    <section className={styles.section}>
                        <div className={styles.sectionHeader}><span>Design Process</span></div>
                        <div className={styles.sectionSubHeader}><span>Inspiration</span></div>
                        <section>
                            <p className={styles.p}>
                                To get a better sense of what I wanted, I spent a lot of time browsing Reddit and
                                Pinterest. I knew early on that I wanted something minimalistic - clean layout, good
                                typography, and a muted color theme.
                            </p>
                            <br />
                            <p className={styles.p}>
                                Here are a few websites I found really helpful for brainstorming:
                            </p>
                            <ul className={`${styles.p} ${styles.list} ${styles.link}`}>
                                <li><a href="https://godly.website/" target="_blank">https://godly.website/</a></li>
                                <li><a href="https://httpster.net/" target="_blank">https://httpster.net/</a></li>
                                <li><a href="https://www.siteinspire.com/" target="_blank"></a>https://www.siteinspire.com/</li>
                            </ul>
                            <br />
                            <p className={styles.p}>
                                Specific portifolos that influenced me:
                            </p>
                            <ul>
                                <li className={styles.listElement}>
                                    <div className={styles.imgWrapper}>
                                        <div className={`${styles.imgContainer} ${styles.mdImg}`}>
                                            <Image src={'/images/notes/2/ref-1.png'} alt="ref-1" fill />
                                        </div>
                                        <span className={styles.imgSubtitle}>
                                            <a href="https://p5aholic.me/projects/" target="_blank">Keita Yamada's portfolio</a>
                                            <MdOutlineArrowOutward />
                                        </span>
                                    </div>
                                    <p className={styles.p}>
                                        This was my first exposure to Japanese web design. It checked all the boxes - simple,
                                        minimal, and very unique. However, halfway through the implementation, I was unsure of
                                        how to scale the design to match the content of my website.
                                    </p>
                                </li>

                                <li className={styles.listElement}>
                                    <div className={styles.imgWrapper}>
                                        <div className={`${styles.imgContainer} ${styles.mdImg}`}>
                                            <Image src={'/images/notes/2/ref-3.png'} alt="ref-3" fill />
                                        </div>
                                    </div>
                                    <div className={styles.imgWrapper}>
                                        <div className={`${styles.imgContainer} ${styles.mdImg}`}>
                                            <Image src={'/images/notes/2/ref-2.png'} alt="ref-2" fill />
                                        </div>
                                        <span className={styles.imgSubtitle}>
                                            <a href="https://www.nathom.dev/" target="_blank">Nathaniel Thomas' portfolio</a>
                                            <MdOutlineArrowOutward />
                                        </span>
                                    </div>
                                    <p className={styles.p}>
                                        I found this while browsing Reddit for AI related projects and was inspired by the simple
                                        layout and minimal color scheme. I ended up borrowing a few ideas from here, but still
                                        wanted something that had more features and felt more personalized.
                                    </p>
                                </li>

                                <li className={styles.listElement}>
                                    <div className={styles.imgWrapper}>
                                        <div className={`${styles.imgContainer} ${styles.lgImg}`}>
                                            <Image src={'/images/notes/2/ref-4.png'} alt="ref-4" fill />
                                        </div>
                                        <span className={styles.imgSubtitle}>
                                            <a href="https://mnsh.me/" target="_blank">Manish Basargekar's portfolio</a>
                                            <MdOutlineArrowOutward />
                                        </span>
                                    </div>
                                    <p className={styles.p}>
                                        This was probably my biggest inspiration. I really liked the bento-box layout, the
                                        way content is organized, the unique design choices of every section, and the way he
                                        uses color to draw attention. A lot of concepts in my website were inspired by his approach.
                                    </p>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.sectionSubHeader}><span>Colors</span></div>
                            <p className={styles.p}>
                                I wanted to try the dark theme and initially only used black and dark gray as my main colors.
                                But, I decided to add dark blue and light blue as secondary colors, and later orange as a tertiary color.
                                I recommend using a tool like <a className={styles.link} href="https://coolors.co/" target="_blank">Coolors</a> to 
                                experiment with color combinations and <a className={styles.link} href="https://huemint.com/" target="_blank">Huemint </a>
                                to visualize how they would look together.
                                
                            </p>
                            <br />
                            <div className={styles.gridWrapper}>
                                <div className={styles.gridContainer}>
                                    <div className={styles.grid}>
                                        {colors.map((colorItem, index) => (
                                            <div
                                                key={index}
                                                className={styles.colorSquare}
                                                style={{
                                                    backgroundColor: colorItem.color,
                                                    border: colorItem.color === '#FFFFFF' ? '2px solid #E5E5E5' : 'none'
                                                }}
                                            >
                                                <span style={{ color: colorItem.subTextColor }}>{colorItem.subText}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={styles.section}>
                            <div className={styles.sectionHeader}><span>Tech Stack</span></div>
                            <p>
                                Choosing the tech stack was fairly straightforward. Since I was already comfortable
                                with React, I used this project as an opportunity to learn Next.js — and it ended
                                up being surprisingly easy to pick up.
                            </p>
                            <p>
                                I chose not to use Tailwind for this project and instead kept the styling in separate CSS files.
                                Even though it takes a bit more time, I like having the styles isolated because it
                                makes things feel more organized and easier to reason about.
                            </p>
                            <p>
                                I have recently started using Markdown (mainly through Obsidian), but for this site I'm currently
                                writing the content directly in JSX for simplicity. I may switch to Markdown or MDX later
                                as the number of posts grows.
                            </p>
                        </section>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Note