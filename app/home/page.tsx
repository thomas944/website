"use client";

import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { colors } from '@/utils/colors';
import { lg, md, sm, xs } from '../../utils/layouts'
import LgNav from '../components/nav/LgNav';
import NameBlock from '../components/blocks/NameBlock';
import BlogBlock from '../components/blocks/BlogBlock';
import EmailBlock from '../components/blocks/EmailBlock';
// import TechnologiesBlock from '../components/blocks/TechStackBlock';
import TechnologyBlock from '../components/blocks/techStackBlock/TechnologyBlock';

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Home = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif'}}>
           
            <LgNav />
            
            <div style={{ maxWidth: '1500px',  width: '100%', backgroundColor: colors.lightGray }}>
                <ResponsiveGridLayout
                    layouts={{ lg: lg, md: md, sm: sm, xs: xs }}
                    breakpoints={{ lg: 1490, md: 1000, sm: 500, xs: 0 }}
                    cols={{ lg: 3, md: 2, sm: 1, xs: 1 }}
                    rowHeight={100}
                    isDraggable={false}
                    isResizable={false}
                    useCSSTransforms
                    className="layout"

                    style={{ backgroundColor: colors.lightGray}}
                >
                    <div key="Name">
                        <NameBlock />
                    </div>
                    <div key="TechStack">
                        <TechnologyBlock />
                    </div>
                    <div key="About" style={{ backgroundColor: colors.lightOrange }}>About</div>
                    <div key="Picture" style={{ backgroundColor: colors.lightOrange }}>Picture</div>

                    <div key="Blog">
                        <BlogBlock />
                    </div>
                    <div key="Email">
                        <EmailBlock />
                    </div>
                    <div key="Projects" style={{ backgroundColor: colors.lightOrange }}>Projects</div>
                    <div key="Spotify" style={{ backgroundColor: colors.lightOrange }}>Spotify</div>
                    <div key="SocialMedia" style={{ backgroundColor: colors.lightOrange }}>SocialMedia</div>


                </ResponsiveGridLayout>
            </div>

        </div>
    )
}

export default Home