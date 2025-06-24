import React from 'react'
import styles from './SummaryBlock.module.css'
import { useSelectedModel } from '../helpers/useSelectModel'
import { getSummary } from '../helpers/helpers'

const SummaryBlock = () => {

    const { selectedModel, setSelectedModel } = useSelectedModel();

    const modelStats = getSummary(selectedModel)
    return (
        <div className={styles.container}>
            <span className={styles.titleText}>Model Summary</span>
            <div className={styles.subHeaderContainer}>
                <span className={styles.subHeaderText}>How it works</span>
                <span>Uses convolutional layers to detect spatial patterns and features in digit images.</span>
            </div>
            <div className={styles.subContainer}>
                <div className={styles.leftContainer}>
                    <span className={styles.leftHeaderText}>Architecture</span>
                    <div>

                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <ul>
                        <li className={styles.listElement}>
                            <span>{modelStats.trainTime}</span>
                            <span>Train Time</span>
                        </li>
                        <li className={styles.listElement}>
                            <span>{modelStats.evalTime}</span>
                            <span>Eval Time</span>
                        </li>
                        <li className={styles.listElement}>
                            <span>{modelStats.trainAcc}</span>
                            <span>Train Acc</span>
                        </li>
                        <li className={styles.listElement}>
                            <span>{modelStats.testAcc}</span>
                            <span>Test Acc</span>
                        </li>
                        <li className={styles.listElement}>
                            <span>{modelStats.params}</span>
                            <span>Trainable Params</span>
                        </li>
                        <li className={styles.listElement}>
                            <span>{modelStats.size}</span>
                            <span>Model Size</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SummaryBlock