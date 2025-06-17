import React from 'react'
import { colors } from '@/utils/colors'
import style from './ContentBlock.module.css'
import { MdOutlineArrowOutward } from "react-icons/md";
import { Project } from '@/types/project';

interface ContentBlockProps {
    year: number;
    projects: Project[];
}

const ContentBlock = ({ year, projects }: ContentBlockProps) => {
    return (
        <div className={style.container}>
            <div className={style.yearText}>{year}</div>
            <div className={style.contentContainer}>
                {projects.map((project, index) => (
                    <div key={index}>
                        <div className={style.titleText}>{project.title}</div>
                        <div>
                            <span className={style.descriptionText}>{project.description}</span>
                            <div className={style.buttonContainer}>
                                {project.actions.visit && (
                                    <a href={project.actions.visit} target="_blank" rel="noopener noreferrer">
                                        <button className={style.button}>
                                            <MdOutlineArrowOutward className={style.arrow} />
                                            <span>Visit</span>
                                        </button>
                                    </a>
                                )}
                                {project.actions.github && (
                                    <a href={project.actions.github} target="_blank" rel="noopener noreferrer">
                                        <button className={style.button}>
                                            <MdOutlineArrowOutward className={style.arrow} />
                                            <span>GitHub</span>
                                        </button>
                                    </a>
                                )}
                                {project.actions.demo && (
                                    <a href={project.actions.demo} target="_blank" rel="noopener noreferrer">
                                        <button className={style.button}>
                                            <MdOutlineArrowOutward className={style.arrow} />
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