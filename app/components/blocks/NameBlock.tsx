"use client"

import React, { useState, useEffect } from 'react'
import { colors } from '@/utils/colors';

interface AnimationState {
    bg: string;
    text: string;
}

const NameBlock = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [nextIndex, setNextIndex] = useState<number>(1);
    const [isSliding, setIsSliding] = useState<boolean>(false);

    const states: AnimationState[] = [
        { bg: colors.darkBlue, text: colors.white },      // Original colors
        { bg: colors.lightBlue, text: colors.darkBlue }, // Light blue with dark text
        { bg: colors.white, text: colors.darkBlue }       // White with dark text
    ];


    
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        
        const runAnimation = (): void => {
            setIsSliding(true);
            
            timeoutId = setTimeout(() => {
                const newCurrentIndex = nextIndex;
                const newNextIndex = (nextIndex + 1) % states.length;
                
                setCurrentIndex(newCurrentIndex);
                setNextIndex(newNextIndex);
                setIsSliding(false);
                
                // Determine delay for next animation
                const isCompletingCycle = newCurrentIndex === 0; // Back to original
                const nextDelay = isCompletingCycle ? 5000 : 2500; // 5s between cycles, 2.5s between steps
                
                timeoutId = setTimeout(runAnimation, nextDelay);
            }, 1200);
        };
        
        // Initial delay before starting
        timeoutId = setTimeout(runAnimation, 10000); // Wait 2 seconds before first animation
        
        return () => clearTimeout(timeoutId);
    }, [nextIndex]);

    const containerStyle: React.CSSProperties = {
        backgroundColor: colors.darkBlue, 
        width: '100%', 
        height: '100%', 
        borderRadius: '0.75rem', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        // Improve rendering for animation
        willChange: 'contents',
        isolation: 'isolate', // Creates new stacking context to prevent corner bleeding
        gridColumn: 'span 1' ,
    };

    const layerStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const textStyle: React.CSSProperties = {
        fontFamily: 'Inter, sans-serif',
        fontSize: '7.5rem',
        fontWeight: 600
    };

    const currentLayerStyle: React.CSSProperties = {
        ...layerStyle,
        backgroundColor: states[currentIndex].bg,
        color: states[currentIndex].text,
        borderRadius: '0.75rem', 
        zIndex: 1
    };

    const slidingLayerStyle: React.CSSProperties = {
        ...layerStyle,
        backgroundColor: states[nextIndex].bg,
        color: states[nextIndex].text,
        borderRadius: '0.75rem', 
        transform: isSliding ? 'translateX(0)' : 'translateX(100%)',
        transition: isSliding ? 'transform 1.2s ease-out' : 'none',
        zIndex: 2,
        // Ensure clean edges during animation
        willChange: 'transform',
        backfaceVisibility: 'hidden'
    };

    return (
        <div style={containerStyle}>
            {/* Base layer - current state */}
            <div style={currentLayerStyle}>
                <span style={{...textStyle, color: states[currentIndex].text}}>
                    Thomas
                </span>
            </div>
            
            {/* Sliding layer - next state */}
            <div style={slidingLayerStyle}>
                <span style={{...textStyle, color: states[nextIndex].text}}>
                    Thomas
                </span>
            </div>
        </div>
    )
}

export default NameBlock