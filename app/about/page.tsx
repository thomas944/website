'use client'
import React from 'react'
import { colors } from '@/utils/colors'
import LgNav from '@/components/pages/homePage/nav/Nav'
import AboutPage from '@/components/pages/homePage/aboutBlock/AboutPage'

const page = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>

                <LgNav />
                <div style={{width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <AboutPage />
                </div>
                
            </div>
      </div>
    )
}

export default page