import React from 'react'
import { colors } from '@/utils/colors'
import SocialMediaIcon from './SocialMediaIcon'
import { IconData } from '@/app/Icons'

const SocialMediaBlock = () => {
    return (
        <div style={{ height: '100%', width: '100%', backgroundColor: colors.darkGray, borderRadius: '1rem', display: 'flex', flexDirection: 'column', padding: '1rem 1rem 0 1rem', boxSizing: 'border-box' }}>
            <div style={{ height: '50%', width: '100%' }}>
                <span style={{ fontWeight: 500, fontSize: '3.5rem', color: colors.white, }}>Social Media</span>
            </div>
            <div style={{ height: '50%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <SocialMediaIcon path={IconData.LinkedInIcon} />
                <SocialMediaIcon path={IconData.GithubIcon} />
                <SocialMediaIcon path={IconData.XIcon} />
            </div>
        </div>
    )

}

export default SocialMediaBlock