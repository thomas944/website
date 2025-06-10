"use client"

import React from 'react'
import LgNav from '@/components/homePage/nav/LgNav'
import { colors } from '@/utils/colors'


const page = () => {
    return (
        <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>

                <LgNav />
                
                <div style={{width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div style={{backgroundColor: colors.darkGray, maxWidth: '1480px', width: '100%', borderRadius: '1rem', display: 'flex', flexDirection: 'row'}}>
                        <div style={{width: '35%', display: 'flex', flexDirection: 'column'}}>
                            <div>
                                2023
                            </div>
                            <div>
                                2024
                            </div>
                        </div>
                        <div style={{width: '35%', display: 'flex', flexDirection: 'column'}}>
                            <div>
                                Proj1
                            </div>
                        </div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default page