import React from 'react'
import styles from './HomePageContent.module.css'
import { Responsive, WidthProvider } from 'react-grid-layout'
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import { lg, md, sm, xs } from '@/utils/layouts'
import NameBlock from './nameBlock/NameBlock'
import BlogBlock from './blogBlock/BlogBlock'
import EmailBlock from './emailBlock/EmailBlock'
import TechnologyBlock from './techStackBlock/TechnologyBlock'
import ProjectsBlock from './projectsBlock/ProjectsBlock'
import AboutBlock from './aboutBlock/AboutBlock'
import SocialMediaBlock from './socialMediaBlock/SocialMediaBlock'
import CardStackBlock from './cardStackBlock/CardStackBlock'
import SpotifyBlock from './spotifyBlock/SpotifyBlock'

const ResponsiveGridLayout = WidthProvider(Responsive);

const HomePageContent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <ResponsiveGridLayout
                    layouts={{ lg: lg, md: md, sm: sm, xs: xs }}
                    breakpoints={{ lg: 1450, md: 1000, sm: 500, xs: 0 }}
                    cols={{ lg: 3, md: 2, sm: 1, xs: 1 }}
                    rowHeight={100}
                    isDraggable={false}
                    isResizable={false}
                    useCSSTransforms
                    className="layout"
                    style={{ padding: 0 }}
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
    )
}

export default HomePageContent