import React from 'react';
import styles from './Technologyicon.module.css'

interface IconProps {
    path: string;
}

const TechnologyIcon = ({path}: IconProps) => {
    const iconImgSize = 35;
    const iconSize = 55;

    return (
        <div 
            className={styles.icon}
            style={{
                height: iconSize, 
                width: iconSize, 
            }}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" height={iconImgSize} width={iconImgSize} className={styles.svg}>
                <path d={path} />
            </svg>
        </div>
    )
}

export default TechnologyIcon