import React from 'react'
import { colors } from '@/utils/colors'
import style from './ContentBlock.module.css'
import { MdOutlineArrowOutward } from "react-icons/md";

interface Actions {
    visit: boolean;
    demo: boolean;
    github: boolean;

}
interface Project {
    title: string;
    description: string;
    actions: Actions;
}

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
                                {Object.entries(project.actions).map(([actionName, isEnabled]) =>
                                    isEnabled ? (
                                        <button key={actionName} className={style.button}>
                                            <MdOutlineArrowOutward className={style.arrow} />
                                            <span>{actionName.charAt(0).toUpperCase() + actionName.slice(1)}</span>
                                        </button>
                                    ) : null
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ContentBlock