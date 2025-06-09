import React from 'react'
import { colors } from '@/utils/colors'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LgNav = () => {
    const pathname = usePathname()
    // padding: '0.5rem 1rem', boxSizing: 'border-box'
    return (
        <div style={{width: '100%', padding: '0 16px', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>

            <div style={{maxWidth: '1480px', width: '100%', display: 'flex', flexDirection: 'row', backgroundColor: colors.darkGray, justifyContent: 'space-between',
                padding: '0 1rem', boxSizing: 'border-box', color: colors.white, borderRadius: '1rem', fontSize: '2.5rem', fontWeight: 400, margin: '3.5rem 0 2rem 0'
            }}>
                <div style={{ padding: '0.5rem 0' }}>Thomas Pham</div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '1.5rem', alignItems: 'center', height: '100%'}}>
                    <Link href="/home">
                        <div style={{cursor: 'pointer', height: '100%', padding: '0.5rem 0', borderBottom: pathname === '/home' ? 'solid' : 'none'}}>Home</div>
                    </Link>
                    <Link href="/work">
                        <div style={{cursor: 'pointer', height: '100%', padding: '0.5rem 0', borderBottom: pathname === '/work' ? 'solid' : 'none'}}>Work</div>
                    </Link>
                    <Link href="/blog">
                        <div style={{cursor: 'pointer', height: '100%', padding: '0.5rem 0', borderBottom: pathname === '/blog' ? 'solid' : 'none'}}>Blog</div>
                    </Link>
                    <Link href="/contact">
                        <div style={{cursor: 'pointer', height: '100%', padding: '0.5rem 0', borderBottom: pathname === '/contact' ? 'solid' : 'none'}}>Contact</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LgNav