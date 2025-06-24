import React from 'react'
import styles from './PredictionsBlock.module.css'
import { ModelData } from '../MnistPage'
import ModelBlock from './ModelBlock'
import EmptyBlock from './EmptyBlock'

interface PredictionBlockProps {
    data?: ModelData[]
}

const PredictionsBlock = ({ data }: PredictionBlockProps) => {
    // const name = "CNN"
    // const guess = {digit: 1, confidence: .6}
    // const output = [
    //     {digit: 0, confidence: 0.1},
    //     {digit: 1, confidence: 0.6},
    //     {digit: 2, confidence: 0.1},
    //     {digit: 3, confidence: 0.25},
    //     {digit: 4, confidence: 0.25},
    //     {digit: 5, confidence: 0.25},
    //     {digit: 6, confidence: 0},
    //     {digit: 7, confidence: 0},
    //     {digit: 8, confidence: 0.25},
    //     {digit: 9, confidence: 0.1},

    // ]
    return (
        <div className={styles.container}>
            <span className={styles.titleText}>Model Predictions</span>
             {data && data.length > 0 ? (
                // Render actual data
                data.map((entry, index) => (
                    <ModelBlock 
                        key={index} 
                        name={entry.name} 
                        output={entry.output} 
                        guess={entry.guess}
                    />
                ))
            ) : (
                // Render 3 empty blocks
                // Array.from({ length: 3 }, (_, index) => (
                //     <EmptyBlock key={`empty-${index}`} />
                // ))
                <EmptyBlock />
            )}
        </div>
    )
}

export default PredictionsBlock