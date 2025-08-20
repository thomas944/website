import React from 'react'
import styles from './ContentBlock.module.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Project } from '@/types/project';

interface ContentBlockProps {
    year: number;
    projects: Project[];
}

const ContentBlock = ({ year, projects }: ContentBlockProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.yearText}>{year}</div>
            <div className={styles.contentContainer}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <div className={styles.titleText}>{project.title}</div>
                        <div>
                            <span className={styles.descriptionText}>{project.description}</span>
                            <div className={styles.buttonContainer}>
                                {project.actions.github && (
                                    <a href={project.actions.github} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>
                                            <MdOutlineArrowOutward className={styles.arrow} />
                                            <span>Github</span>
                                        </button>
                                    </a>
                                )}
                                {project.actions.visit && (
                                    <a href={project.actions.visit} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>
                                            <MdOutlineArrowOutward className={styles.arrow} />
                                            <span>Visit</span>
                                        </button>
                                    </a>
                                )}
                                {project.actions.demo && (
                                    <a href={project.actions.demo} target="_blank" rel="noopener noreferrer">
                                        <button className={styles.button}>
                                            <MdOutlineArrowOutward className={styles.arrow} />
                                            <span>Demo</span>
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContentBlock