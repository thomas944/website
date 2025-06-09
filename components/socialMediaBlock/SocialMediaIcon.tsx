import React, { useState } from 'react'
import { colors } from '@/utils/colors';

interface IconProps {
    path: string;
}

const SocialMediaIcon = ({ path }: IconProps) => {
    const [hovered, setHovered] = useState(false);
    const iconImgSize = 35;
    const iconSize = 55;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                height: iconSize,
                width: iconSize,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '8px',
                backgroundColor: hovered ? colors.lightGray : 'transparent',
                transition: 'background-color 0.2s ease',
                cursor: hovered ? 'pointer' : 'default'
            }}>

            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height={iconImgSize} width={iconImgSize}
                fill={hovered ? colors.darkGray : colors.baseWhite}>
                <path d={path} />
            </svg>
        </div>
    )
}

export default SocialMediaIcon