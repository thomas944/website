import React from 'react'
import { notesData } from '@/data/notes'


const NotesBlock = () => {
    return (
        <div style={{ backgroundColor: '#242424', maxWidth: '980px', width: '100%', borderRadius: '1rem', color: 'white', padding: '6rem 4rem', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: '4rem', fontFamily: 'PP Machina Inktrap, sans-serif', padding: '0 0 1rem .25rem' }}>
                Notes
            </div>
            <ul style={{ fontSize: '1.25rem', padding: 0, listStyle: 'none' }}>
                {notesData.map((entry, index) => (
                    <li
                        key={index}
                        style={{
                            width: '100%',
                            display: 'flex',
                        }}
                    >
                        <span
                            style={{
                                width: '150px',
                                flexShrink: 0,
                                textAlign: 'right',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                fontFamily: 'PP Machina, sans-serif',
                                fontWeight: 400,
                                paddingRight: '15px'
             
                            }}
                        >
                            {entry.date}
                        </span>
                        <span
                            style={{
                                flex: 1,                  // Changed from 'width: 85%'
                                wordWrap: 'break-word',   // NEW: Allow title wrapping
                                overflowWrap: 'break-word', // NEW: Better word breaking
                                paddingRight: '1rem'
                            }}
                        >
                            {entry.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NotesBlock