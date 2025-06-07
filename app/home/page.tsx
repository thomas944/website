import React from 'react'
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const HomePage = () => {
    return (
        <div>Welcome to my HomePage</div>
    )
}

export default HomePage