"use client";

import React from 'react'
import LgNav from '@/components/pages/homePage/nav/Nav';
import HomePageContent from '@/components/pages/homePage/HomePageContent';
import styles from './page.module.css'

const Home = () => {
    return (
        <div className={styles.container}>
                <LgNav />
                <HomePageContent />
        </div>
    )
}

export default Home