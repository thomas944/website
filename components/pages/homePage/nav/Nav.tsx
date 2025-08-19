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
                <Link href={'/home'}>
                    <div className={styles.titleContainer}><span className={styles.title}>tpham</span></div>
                </Link>
                
                <div className={styles.linkGroup}>
                    {['/home', '/projects', '/notes'].map((path) => (
                        <Link key={path} href={path}>
                            <div
                                className={styles.navLink}
                                style={{
                                    fontWeight: pathname.includes(path) ? 500 : 400,  
                                    opacity: pathname.includes(path)? 1 : 0.5                        
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