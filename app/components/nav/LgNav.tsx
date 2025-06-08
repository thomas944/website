import React from 'react'
import { colors } from '@/utils/colors'

const LgNav = () => {
    return (
        <div style={{maxWidth: '1500px', width: '100%', display: 'flex', flexDirection: 'row', backgroundColor: colors.darkGray, justifyContent: 'space-between',
            padding: '0.5rem 1rem', boxSizing: 'border-box', color: colors.white, borderRadius: '1rem', fontSize: '2.5rem', fontWeight: 400
        }}>
            <div style={{ }}>Thomas Pham</div>
            <div style={{display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'center'}}>
                <div>Home</div>
                <div>Work</div>
                <div>Blog</div>
                <div>Contact</div>
            </div>
        </div>
    )
}

export default LgNav