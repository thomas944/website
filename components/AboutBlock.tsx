import React from 'react'
import { colors } from '@/utils/colors'

const AboutBlock = () => {
    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: colors.darkGray, borderRadius: '15px', display: 'flex', flexDirection: 'column', padding: '1rem', boxSizing: 'border-box' }}>
            <div style={{height: '40%', width: '100%'}}>
                <span style={{color: colors.white, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '5rem'}}>
                    About
                </span>
            </div>
            <div style={{height: '60%', width: '100%'}}>
                <div style={{color: colors.white, fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.2rem'}}>
                    Hello, I am grad student at UT Austin interested in software development and machine learning
                </div>
            </div>
        </div>
    )
}

export default AboutBlock