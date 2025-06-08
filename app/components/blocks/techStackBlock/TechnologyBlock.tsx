import React from 'react'
import { colors } from '@/utils/colors'
import TechnologyIcon from './TechnologyIcon'
import { IconData } from '@/app/Icons'

const TechnologyBlock = () => {
    return (
        <div style={{height: '100%', width: '100%', backgroundColor: colors.darkGray, borderRadius: '1rem', display: 'flex', flexDirection: 'column', padding: '1rem 1rem 0 1rem', boxSizing: 'border-box' }}>
            <div style={{height: '50%', width: '100%'}}>
                <span style={{fontWeight: 500, fontSize: '3.5rem', color: colors.white, }}>Technologies</span>
            </div>
            <div style={{height: '50%', width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <TechnologyIcon path={IconData.TSIcon}/>
                <TechnologyIcon path={IconData.JSIcon}/>
                <TechnologyIcon path={IconData.ReactIcon}/>
                <TechnologyIcon path={IconData.NextJSIcon}/>
                <TechnologyIcon path={IconData.GitIcon}/>
                <TechnologyIcon path={IconData.GithubIcon}/>
                <TechnologyIcon path={IconData.DockerIcon}/>
                <TechnologyIcon path={IconData.PythonIcon}/>
            </div>


        </div>
    )
}

export default TechnologyBlock