"use client";

import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { colors } from '@/utils/colors';
import { lg, md, sm, xs } from '../../utils/layouts'
import LgNav from '@/components/pages/homePage/nav/Nav';
import NameBlock from '@/components/pages/homePage/nameBlock/NameBlock';
import BlogBlock from '@/components/pages/homePage/blogBlock/BlogBlock';
import EmailBlock from '@/components/pages/homePage/emailBlock/EmailBlock';
import TechnologyBlock from '@/components/pages/homePage/techStackBlock/TechnologyBlock';
import ProjectsBlock from '@/components/pages/homePage/projectsBlock/ProjectsBlock';
import AboutBlock from '@/components/pages/homePage/aboutBlock/AboutBlock';
import SocialMediaBlock from '@/components/pages/homePage/socialMediaBlock/SocialMediaBlock';
import CardStackBlock from '@/components/pages/homePage/cardStackBlock/CardStackBlock';
import SpotifyBlock from '@/components/pages/homePage/spotifyBlock/SpotifyBlock';

const ResponsiveGridLayout = WidthProvider(Responsive);

export const Home = () => {
    return (
        <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: colors.black }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Inter, sans-serif' }}>
                <LgNav />
                <div style={{ width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <div style={{ maxWidth: '1500px', width: '100%' }}>
                        <ResponsiveGridLayout
                            layouts={{ lg: lg, md: md, sm: sm, xs: xs }}
                            breakpoints={{ lg: 1450, md: 1000, sm: 500, xs: 0 }}
                            cols={{ lg: 3, md: 2, sm: 1, xs: 1 }}
                            rowHeight={100}
                            isDraggable={false}
                            isResizable={false}
                            useCSSTransforms
                            className="layout"
                            style={{}}
                        >
                            <div key="Name">
                                <NameBlock />
                            </div>
                            <div key="TechStack">
                                <TechnologyBlock />
                            </div>
                            <div key="About">
                                <AboutBlock />
                            </div>
                            <div key="Picture">
                                <CardStackBlock />
                            </div>

                            <div key="Blog">
                                <BlogBlock />
                            </div>
                            <div key="Email">
                                <EmailBlock />
                            </div>
                            <div key="Projects">
                                <ProjectsBlock />
                            </div>
                            <div key="Spotify">
                                <SpotifyBlock />
                            </div>
                            <div key="SocialMedia">
                                <SocialMediaBlock />
                            </div>
                        </ResponsiveGridLayout>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home