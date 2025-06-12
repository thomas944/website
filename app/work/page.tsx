"use client"

import React from 'react'
import LgNav from '@/components/homePage/nav/LgNav'
import { colors } from '@/utils/colors'
import '@/styles/fonts.css'
import ContentBlock from '@/components/projectsPage/ContentBlock'

const data = [
    {
        year: 2025,
        projects: [
            {
                title: 'project1',
                description: `Created an app for generating typographic art. Users can select font family,
                    character, and colors. The design process was enjoyable, inspired by rsms
                    Inter's poster. The art is created by layering font weights from 1000 to 100
                    using CSS.`,
                actions: {
                    visit: true,
                    demo: true,
                    github: true,
                },
            },
            //   {
            //     title: 'project2',
            //     description: 'description2',
            //     actions: {
            //       visit: true,
            //       github: true,
            //       demo: false,
            //     },
            //   },
        ],
    },
];

const page = () => {


    return (
        <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <LgNav />

                <div style={{ width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <ContentBlock year={data[0].year} projects={data[0].projects} />
                </div>
            </div>
        </div>
    )
}

export default page