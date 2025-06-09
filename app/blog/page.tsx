"use client"
import React from 'react'
import LgNav from '@/components/nav/LgNav'
import { colors } from '@/utils/colors'

const page = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>

                <LgNav />
            </div>
        </div>
    )
}

export default page