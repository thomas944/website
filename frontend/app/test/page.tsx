
import React from 'react'
import BaseIcon from './BaseIcon'
import { IconData } from '../Icons'
import { colors } from '@/utils/colors'
import CardStackBlock from '../../components/homePage/cardStackBlock/CardStackBlock'

const page = async () => {
    return (
        <div style={{width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center'}}>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8'}}>0</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8'}}>0</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .1}}>1</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .2}}>2</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .3}}>3</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .4}}>4</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .6}}>5</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .7}}>6</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .8}}>7</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: .9}}>8</div>
            <div style={{height: '45px', width: '45px', backgroundColor: '#5CC4A8', opacity: 1}}>9</div>


        </div>
    )
}

export default page