// "use client";

import React from 'react'
import { colors } from '@/utils/colors';
import NameBlock from '../components/blocks/NameBlock';

const CustomGridLayout: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.black, padding: '2rem', boxSizing: 'border-box'}}>
        <div style={{height: '100%', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'repeat(4, 1fr)', height: '65vh', width: '1500px', gap: '1rem' }}>
                <div style={{ 
                    }}>
                    <NameBlock />
                </div>
                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 2'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>

                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 2'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>

                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 1'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>

                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 1'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>

                
                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 2'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>

                <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 1'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>


                 <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 1'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>


                 <div style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '0.75rem', 
                    padding: '1.5rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gridColumn: 'span 1',
                    gridRow: 'span 1'
                    }}>
                    <span style={{ color: '#1f2937', fontSize: '1.125rem', fontWeight: '500' }}>Large Item</span>
                </div>






            </div>
        </div>
       
     
    </div>
  );
};
export default CustomGridLayout