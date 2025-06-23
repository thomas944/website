import React, { useState } from 'react'
import styles from './ConfusionMatrixBlock.module.css'
import { createGrid, getCellContent, getCellStyle } from '../helpers/helpers'

const models = ['cnn', 'mlp', 'lr']


const ConfusionMatrixBlock = () => {
    const [modelNum, setModelNum] = useState(0)

    const grid = createGrid(modelNum)

    return (
        <div className={styles.container}>
            <span className={styles.titleText}>Confusion Matrix</span>
            <div className={styles.matrixContainer}>
                {grid.map((row, rowIndex) => (
                    row.map((val, colIndex) => (
                        <div key={`${rowIndex}-${colIndex}`} className={styles.cellContainer}>
                            <div className={styles.cell} style={getCellStyle(val)}>
                                {getCellContent(val)}
                            </div>
                        </div>
                    ))
                ))}
            </div>
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
    )
}

export default ConfusionMatrixBlock

        // className={`${styles.bar}${item.digit === guess.digit ? ` ${styles.barHighlight}` : ''}`}
