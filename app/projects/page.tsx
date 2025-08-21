"use client"

import React from 'react'
import LgNav from '@/components/pages/homePage/nav/Nav'
import '@/styles/fonts.css'
import ContentBlock from '@/components/pages/projectsPage/ContentBlock'
import { projectData } from '@/data/projects'
import styles from './page.module.css'

const page = () => {

    return (
            <div className={styles.container}>
                <LgNav />
                <div className={styles.contentContainer}>
                    {projectData.map((entry, index) => (
                        <ContentBlock key={index} year={entry.year} projects={entry.projects} />
                    ))}

                </div>
            </div>
    )
}

export default page