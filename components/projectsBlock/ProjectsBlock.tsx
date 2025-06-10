import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md"
import { colors } from '@/utils/colors'
import styles from './ProjectsBlock.module.css'
import Link from 'next/link'

const ProjectsBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <span className={styles.titleText}>
                    View My Projects
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.buttonText}>
                    <MdOutlineArrowOutward />
                    <span>Resume</span>
                </div>
                <Link href={'/work'}>
                    <div className={styles.buttonText}>
                        <MdOutlineArrowOutward />
                        <span>View</span>
                    </div>
                </Link>
                
            </div>
        </div>
    )
}

export default ProjectsBlock