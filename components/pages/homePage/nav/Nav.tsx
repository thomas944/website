import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Nav.module.css'
import Menu from './Menu'

const LgNav = () => {
    const pathname = usePathname()

    return (
        <div className={styles.container}>
            <div
                className={`${styles.navContainer} ${
                    pathname === '/home' ? styles.lgView : styles.mdView
                }`}>
                <div className={styles.titleContainer}><span className={styles.title}>PLCH</span></div>
                
                <div className={styles.linkGroup}>
                    {['/home', '/projects', '/notes'].map((path) => (
                        <Link key={path} href={path}>
                            <div
                                className={styles.navLink}
                                style={{
                                    borderBottom: pathname.includes(path) ? 'solid' : 'none',
                                    fontWeight: pathname.includes(path) ? 500 : 400,                                  
                                }}
                            >
                                {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.menuContainer}>
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default LgNav