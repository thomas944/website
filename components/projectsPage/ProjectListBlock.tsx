import React from 'react'
import { colors } from '@/utils/colors'


interface ProjectDetail {
    name: string;
    description: string;
}

interface ProjectListBlockProps {
    year: string;
    projects: ProjectDetail[];
}

const ProjectListBlock = ({year, projects} : ProjectListBlockProps) => {
    return (
        <div style={{backgroundColor: colors.veryLightBlue, maxWidth: '950px', width: '100%', borderRadius: '1rem', display: 'flex', flexDirection: 'column', padding: '6rem 4rem', boxSizing: 'border-box'}}>
            <div>
                {}
            </div>
        </div>
    )
}

export default ProjectListBlock