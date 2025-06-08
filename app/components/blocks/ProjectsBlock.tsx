import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md"
import { colors } from '@/utils/colors'

const ProjectsBlock = () => {
  return (
    <div style={{ height: '100%', width: '100%', backgroundColor: colors.darkGray, borderRadius: '15px', display: 'flex', flexDirection: 'column', padding: '1rem', boxSizing: 'border-box', color: colors.white, fontFamily: 'Inter, sans-serif', }}>
        <div style={{ height: '75%', width: '100%' }}>
            <span style={{ fontWeight: 500, fontSize: '5rem', lineHeight: 1.2 }}>
                View My Projects
            </span>
        </div>
        <div style={{ height: '25%', width: '100%', display: 'flex', flexDirection: 'row', fontSize: '2rem', fontWeight: 400, gap: '1rem'}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <MdOutlineArrowOutward/>
                <span>Resume</span>

            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <MdOutlineArrowOutward/>
                <span>View</span>

            </div>

        </div>
    </div>
  )
}

export default ProjectsBlock