"use client"

import React from 'react'
import LgNav from '@/components/homePage/nav/LgNav'
import { colors } from '@/utils/colors'
import '@/styles/fonts.css'

const page = () => {


    return (
        <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <LgNav />

                <div style={{ width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div style={{ backgroundColor: colors.veryLightBlue, maxWidth: '950px', width: '100%', borderRadius: '1rem', display: 'flex', flexDirection: 'column', padding: '6rem 4rem', boxSizing: 'border-box' }}>
                        <div style={{
                            width: '100%', display: 'flex',
                            flexDirection: 'row', justifyContent: 'center',
                            fontSize: '12.5rem', fontFamily: 'PP Machina Inktrap, sans-serif', fontWeight: 800,
                            backgroundColor: colors.lightBlue, 
                            backgroundImage: `
    linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)
  `,
                            backgroundSize: '15px 15px',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            color: 'transparent'

                        }}>
                            2024
                        </div>
                        <div style={{ width: '100%', padding: '0 4rem', fontSize: '2rem' }}>
                            <div style={{ fontFamily: 'PP Machina Inktrap, sans-serif', fontWeight: 800 }}>
                                Typeart
                            </div>
                            <div>
                                <span
                                    style={{
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '1.5rem',
                                        fontWeight: 400,
                                        lineHeight: 1.2,
                                        display: 'block',
                                        color: '#4c4c4c'
                                    }}
                                >
                                    Created an app for generating typographic art. Users can select font family,
                                    character, and colors. The design process was enjoyable, inspired by rsms
                                    Inter's poster. The art is created by layering font weights from 1000 to 100
                                    using CSS.
                                </span>
                                {/* <button
                                    style={{
                                        fontFamily: 'Inter, sans-serif',

                                    }}
                                    onClick={() => console.log('Button clicked')}
                                >
                                    View Project
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page