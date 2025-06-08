import React, { useState } from 'react';
import { colors } from '@/utils/colors';
import { MdOutlineArrowOutward } from "react-icons/md";

const EmailBlock = () => {
    const [hovered, setHovered] = useState(false);
    
    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: colors.darkGray, borderRadius: '15px', display: 'flex', flexDirection: 'column', padding: '1rem', boxSizing: 'border-box' }}>
            <div style={{height: '50%', width: '100%'}}>
                <span style={{color: colors.white, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '3.5rem'}}>
                    Get in Touch
                </span>
            </div>
            <div style={{height: '50%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <div onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} 
                    style={{color: colors.white, fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '2rem', textDecoration: hovered ? 'underline' : 'none', cursor: hovered ? 'pointer' : 'none', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <MdOutlineArrowOutward />
                    <span>Email</span>

                </div>
            </div>
        </div>
    )
}

export default EmailBlock;
