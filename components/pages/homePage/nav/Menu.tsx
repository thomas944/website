import React, { useState } from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const email = "phamdwtn@gmail.com"

const Menu = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={styles.container}
            >
                <div className={styles.menu}>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>
                    <div className={styles.line}></div>

                </div>
                <span className={styles.menuText}>Menu</span>
            </button>

            {isOpen && (
                <div className={styles.overlay} style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.close}>
                        <span>✕ Close</span>
                    </button>

                    <div className={styles.title}>
                        PLCH
                    </div>
                    <div className={styles.linkGroup}>
                        {['/home', '/projects', '/notes'].map((path) => (
                            <Link key={path} href={path}>
                                <div
                                    className={styles.navLink}
                                    style={{
                                        // borderBottom: pathname === path ? 'solid' : 'none',
                                        fontWeight: pathname === path ? 500 : 400,
                                    }}
                                >
                                    <span style={{borderBottom: pathname === path ? 'solid' : 'none',}}>
                                        {path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className={styles.footer}>Get in touch</div>
                    <div className={styles.footerEmail}>
                        <a href={`mailto:${email}`}> {email} </a>
                    </div>
                    <div className={styles.footerPhoneNum}>(713)474-7442</div>
                </div>
            )}


        </>
    )
}

export default Menu