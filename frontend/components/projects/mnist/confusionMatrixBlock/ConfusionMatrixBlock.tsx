import React, { useState } from 'react'
import styles from './ConfusionMatrixBlock.module.css'
import { createGrid, getCellContent, getCellStyle, getSummary } from '../helpers/helpers'

const models = ['cnn', 'mlp', 'lr']


const ConfusionMatrixBlock = () => {
    const [modelNum, setModelNum] = useState(0)

    const grid = createGrid(modelNum)
    const modelStats = getSummary(modelNum)

    return (
        <div className={styles.container}>
            <span className={styles.titleText}>Confusion Matrix</span>
            <div className={styles.matrixContainer}>
                {grid.map((row, rowIndex) => (
                    row.map((val, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className={styles.cellContainer}>
                            <div className={`${styles.cell}${val.type === 'diagonal' || val.type === 'cell' ? ` ${styles.dataCell}` : ''}`} 
                                style={getCellStyle(val)}
                            >
                                {getCellContent(val)}
                            </div>
                        </div>
                    ))
                ))}
            </div>
            <div className={styles.buttonWrapper}>
                <div className={styles.buttonContainer}>
                    {models.map((name, index) => (
                        <button 
                            key={index} 
                            onClick={() => setModelNum(index)}
                            className={`${styles.button}${modelNum === index ? ` ${styles.buttonSelect}` : ''}`}
                        >
                            {name.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className={styles.summaryContainer}>
                <div className={styles.summaryRow}>
                    <div className={styles.statContainer}>
                        <span className={styles.statNum}>{modelStats.bestPredicted}</span>
                        <span className={styles.statText}>Best Predicted Digit</span>
                    </div>
                    <div className={styles.statContainer}>
                        <span className={styles.statNum}>{modelStats.mostConfused}</span>
                        <span className={styles.statText}>Most Confused Digit</span>
                    </div>
                 
                </div>
                <div className={styles.summaryRow}>
                    <div className={styles.statContainer}>
                        <span className={styles.statNum}>{modelStats.worstConfusion}</span>
                        <span className={styles.statText}>Worst Confusion</span>
                    </div>
                    <div className={styles.statContainer}>
                        <span className={styles.statNum}>{modelStats.overallAcc}</span>
                        <span className={styles.statText}>Overall Accuracy</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfusionMatrixBlock

