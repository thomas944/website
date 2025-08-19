"use client"
import React from 'react'
import LgNav from '@/components/pages/homePage/nav/Nav'
import { colors } from '@/utils/colors'
import Note from '@/components/pages/notesPage/notes/2/Note'


const page = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>

                <LgNav />
                <Note />
            </div>
      </div>
  )
}

export default page