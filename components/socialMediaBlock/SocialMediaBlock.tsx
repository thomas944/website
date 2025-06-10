import React from 'react'
import { colors } from '@/utils/colors'
import SocialMediaIcon from './SocialMediaIcon'
import { IconData } from '@/app/Icons'
import styles from './SocialMediaBlock.module.css'

const SocialMediaBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainerLarge}>
                <span className={styles.titleText}>Social Media</span>
            </div>

            <div className={styles.titleContainerSmall}>
                <span className={styles.titleText}>Social</span>
                <span className={styles.titleText}>Media</span>

            </div>
            <div className={styles.iconContainer}>
                <SocialMediaIcon path={IconData.LinkedInIcon} />
                <SocialMediaIcon path={IconData.GithubIcon} />
                <SocialMediaIcon path={IconData.XIcon} />
            </div>
        </div>
    )

}

export default SocialMediaBlock