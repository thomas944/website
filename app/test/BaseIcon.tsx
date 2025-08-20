import React from 'react'

interface IconProps {
    fillColor: string;
    height: number;
    width: number;
    path: string;
}

const BaseIcon = ({fillColor, height, width, path}: IconProps) => {
    return (
        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill={fillColor} height={height} width={width}>
            <title>JavaScript</title>
            <path d={path}/>
        </svg>
    )
}

export default BaseIcon