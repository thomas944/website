import React from 'react'
import TechnologyIcon from './TechnologyIcon'
import { IconData } from '@/app/Icons'
import styles from './TechnologyBlock.module.css'

const TechnologyBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainerLarge}>
                <span className={styles.titleText}>Technologies</span>
            </div>
            <div className={styles.titleContainerSmall}>
                <span className={styles.titleText}>Tech</span>
                <span className={styles.titleText}>Stack</span>
            </div>
            <div className={styles.iconContainer}>
                <TechnologyIcon path={IconData.TSIcon}/>
                <TechnologyIcon path={IconData.JSIcon}/>
                <TechnologyIcon path={IconData.ReactIcon}/>
                <TechnologyIcon path={IconData.CssIcon}/>
                <TechnologyIcon path={IconData.NextJSIcon}/>
                <TechnologyIcon path={IconData.GitIcon}/>
                <TechnologyIcon path={IconData.DockerIcon}/>
                <TechnologyIcon path={IconData.PythonIcon}/>
            </div>
        </div>
    )
}

export default TechnologyBlock