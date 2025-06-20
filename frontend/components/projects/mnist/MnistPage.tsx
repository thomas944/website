import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { colors } from '@/utils/colors';
import CanvasBlock from './canvasBlock/CanvasBlock';


const ResponsiveGridLayout = WidthProvider(Responsive);


export const lg = [
    { i: 'Canvas', x: 0, y: 0, w: 1, h: 4},
    { i: 'ModelPred', x: 1, y: 0, w: 2, h: 4},
    { i: 'Stats', x: 0, y: 1.5, w: 2, h: 2},


]

const md = [
    { i: 'Canvas', x: 0, y: 0, w: 1, h: 1.5},
    { i: 'ModelPred', x: 0, y: 1.5, w: 1, h: 1.5},
    { i: 'Stats', x: 0, y: 1.5, w: 1, h: 1.5},

]

const MnistPage = () => {
    return (
        <div style={{ minHeight: '100vh', width: '100vw', backgroundColor: ''}}>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Geist, sans-serif' }}>
                <div style={{display: 'flex', flexDirection: 'column', }}>
                    <span style={{fontSize: '4.5rem', fontWeight: 800}}>Interactive Mnist Explorer</span>
                    <span style={{fontSize: '1.5rem', color: '#666666', lineHeight: 1}}>Draw digits on the canvas and watch an AI model guess what it is</span>
                </div>
                <div style={{width: '100%', padding: '32px 16px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div style={{maxWidth: '950px', width: '100%', backgroundColor: '#FCFCFC', borderRadius: '1rem', border: '1px solid #eaeaea'}}>
                        <ResponsiveGridLayout
                            layouts={{lg: lg, md: md}}
                            breakpoints={{lg: 900, md: 500}}
                            cols={{ lg:3, md: 2}}
                            rowHeight={100}
                            isDraggable={false}
                            isResizable={false}
                            useCSSTransforms
                            className="layout"
                        >
                            <div key="Canvas">
                                <CanvasBlock />
                            </div>
                            <div key="ModelPred" style={{backgroundColor: '#f4f4f4', borderRadius: '1rem'}}>ModelPred</div>
                            <div key="Stats" style={{backgroundColor: '#f4f4f4', borderRadius: '1rem'}}>Stats</div>
                        </ResponsiveGridLayout>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default MnistPage