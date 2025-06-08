import React from 'react'
import TestIcon from '../../icons/JSIcon'
import BaseIcon from './BaseIcon'
import { IconData } from '../Icons'
import { colors } from '@/utils/colors'

const page = () => {
  return (
    <div>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.TSIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.JSIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.ReactIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.DockerIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.NextJSIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.PythonIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.GitIcon}/>
        <BaseIcon height={50} width={50} fillColor={colors.lightOrange} path={IconData.GithubIcon}/>
    </div>
  )
}

export default page