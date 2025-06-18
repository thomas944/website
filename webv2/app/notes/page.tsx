"use client"
import React from 'react'
import LgNav from '@/components/homePage/nav/Nav'
import { colors } from '@/utils/colors'
import NotesBlock from '@/components/notesPage/NotesBlock'

const page = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>

                <LgNav />
                <NotesBlock />
            </div>
        </div>
    )
}

export default page