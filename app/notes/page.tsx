"use client"
import React from 'react'
import LgNav from '@/components/pages/homePage/nav/Nav'
import NotesBlock from '@/components/pages/notesPage/NotesBlock'
import styles from './page.module.css'

const page = () => {
    return (
        <div className={styles.container}>
            <LgNav />
            <NotesBlock />
        </div>
    )
}

export default page