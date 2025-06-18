import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'

const LgNav = () => {
    const pathname = usePathname()

    return (
        <div className={styles.container}>
            <div
                className={`${styles.navContainer} ${
                    pathname === '/home' ? styles.lgView : styles.mdView
                }`}>
                <div className={styles.title}>Thomas Pham</div>

                <div className={styles.linkGroup}>
                    {['/home', '/projects', '/notes'].map((path) => (
                        <Link key={path} href={path}>
                            <div
                                className={styles.navLink}
                                style={{
                                    borderBottom: pathname === path ? 'solid' : 'none',
                                    fontWeight: pathname === path ? 500 : 400,                                  
                                }}
                            >
                                {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LgNav