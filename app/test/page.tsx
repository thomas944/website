
import React from 'react'
import BaseIcon from './BaseIcon'
import { IconData } from '../Icons'
import { colors } from '@/utils/colors'
import CardStackBlock from '../components/blocks/CardStackBlock'

const page = async () => {

    const res = await fetch('http://127.0.0.1:3000/testing',
        { next: { revalidate: 10 } }
    )

    const song = await res.json();
    return (
        <div>
            {/* <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.TSIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.JSIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.ReactIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.DockerIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.NextJSIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.PythonIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.GitIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.GithubIcon}/> */}
            <CardStackBlock />

        </div>
    )
}

export default page