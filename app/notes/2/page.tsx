"use client"
import React from 'react'
import LgNav from '@/components/pages/homePage/nav/Nav'
import Note from '@/components/pages/notesPage/notes/2/Note'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <LgNav />
            <Note />
        </div>
    )
}

export default page