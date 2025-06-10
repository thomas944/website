import React from 'react'
import { colors } from '@/utils/colors'
import SocialMediaIcon from './SocialMediaIcon'
import { IconData } from '@/app/Icons'
import styles from './SocialMediaBlock.module.css'

const linkedInUrl = "https://www.linkedin.com/in/pham944/"
const githubUrl = "https://github.com/thomas944"
const xUrl = "https://x.com/thomaspham944"

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
                <SocialMediaIcon path={IconData.LinkedInIcon} url={linkedInUrl} />
                <SocialMediaIcon path={IconData.GithubIcon} url={githubUrl}/>
                <SocialMediaIcon path={IconData.XIcon} url={xUrl}/>
            </div>
        </div>
    )

}

export default SocialMediaBlock