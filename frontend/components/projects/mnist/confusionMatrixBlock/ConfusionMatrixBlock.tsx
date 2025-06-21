import React from 'react'
import styles from './ConfusionMatrixBlock.module.css'

const models = [   // Model 1 data (current)
    [
        [0.8, 0.1, 0.1, 0, 0, 0, 0, 0, 0],
        [0.1, 99.1, 0.2, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.0],
        [0.3, 0.4, 96.8, 0.6, 0.2, 0.3, 0.2, 0.8, 0.3, 0.1],
        [0.2, 0.1, 1.2, 95.9, 0.1, 1.4, 0.1, 0.4, 0.5, 0.1],
        [0.1, 0.2, 0.3, 0.1, 97.4, 0.2, 0.2, 0.3, 0.2, 1.0],
        [0.3, 0.2, 0.4, 1.1, 0.4, 95.8, 0.9, 0.3, 0.5, 0.1],
        [0.4, 0.2, 0.3, 0.1, 0.3, 1.2, 97.2, 0.1, 0.2, 0.0],
        [0.2, 0.3, 0.8, 0.3, 0.4, 0.1, 0.1, 96.9, 0.2, 0.7],
        [0.4, 0.3, 0.7, 0.9, 0.2, 0.8, 0.3, 0.4, 95.2, 0.8],
        [0.2, 0.1, 0.2, 0.3, 1.3, 0.4, 0.1, 0.9, 0.3, 96.2]
    ]]


const ConfusionMatrixBlock = () => {
    
    const getCellColor = (value: number) => {
        if (value === 0) return '#eaeaea'
        
        const maxValue = Math.max(...grid.flat())
        const opacity = value / maxValue
        
        return `rgba(92, 196, 168, ${opacity})`
    }

    const grid = models[0]
    return (
        <div className={styles.container}>
            <span className={styles.titleText}>Confusion Matrix</span>
            <div className={styles.matrixContainer}>
                {grid.map((row, rowIndex) => (
                    row.map((val, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className={styles.cellContainer}>
                            <div className={styles.cell} style={{backgroundColor: getCellColor(val)}}></div>
                        </div>
                    ))
                ))}
            </div>
        </div>
    )
}

export default ConfusionMatrixBlock