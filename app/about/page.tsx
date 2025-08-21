'use client'
import React from 'react'
import LgNav from '@/components/pages/homePage/nav/Nav'
import AboutPage from '@/components/pages/homePage/aboutBlock/AboutPage'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <LgNav />
            <AboutPage />             
        </div>
    )
}

export default page