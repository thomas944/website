"use client"

import React from 'react'
import LgNav from '@/components/homePage/nav/LgNav'
import { colors } from '@/utils/colors'
import '@/styles/fonts.css'
import ContentBlock from '@/components/projectsPage/ContentBlock'
import { projectData } from '@/data/projects'

const page = () => {

    return (
        <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <LgNav />

                <div style={{ width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5rem' }}>
                    {projectData.map((entry, index) => (
                        <ContentBlock key={index} year={entry.year} projects={entry.projects} />
                    ))}

                </div>
            </div>
        </div>
    )
}

export default page