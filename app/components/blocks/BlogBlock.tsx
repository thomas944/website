import React, { useState } from 'react';
import { colors } from '@/utils/colors';


const BlogBlock = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: colors.darkGray, borderRadius: '15px', display: 'flex', flexDirection: 'column', padding: '1rem', boxSizing: 'border-box' }}>
            <div style={{height: '50%', width: '100%'}}>
                <span style={{color: colors.white, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '3.5rem'}}>
                    Blog
                </span>
            </div>
            <div style={{height: '50%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <span onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)} 
                    style={{color: colors.white, fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '2rem', textDecoration: hovered ? 'underline' : 'none', cursor: hovered ? 'pointer' : 'none'}}>
                    Read about read about read
                </span>
            </div>
        </div>

    )
}

export default BlogBlock;

