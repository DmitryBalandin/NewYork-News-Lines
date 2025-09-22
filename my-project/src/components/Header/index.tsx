import React, { useState , useRef } from "react";
import styles from './styles.module.scss'

interface Header {

}

const nameTheme: Array<string> = ['Besiders','Science','Arts', 'World', 'Briefing', 'Opinion', 'Travel','Sports' ].sort()

export const Header: React.FC<Header> = () => {
    const headerRef = useRef(null);
    const [isOpenMenu, setIsOpenMenu] = useState(false)
    const handleCheckbox = () => setIsOpenMenu((isOpen) => !isOpen)

    return (
        <header className={styles.burger} ref={headerRef} >
            <div className={styles.burgerControl}>
                <input className={styles.burgerCheckbox} type="checkbox" id="input-burger"  />
                <label className={styles.burgerLabel} htmlFor="input-burger" onClick={handleCheckbox} ></label>
            </div>
            <h2 className={styles.burgerTitle}>BESIDER</h2>
            <div className={styles.burgerContainer}  style={!isOpenMenu ? { transform: 'translateX(-100%)', visibility:'hidden' } : { transform: 'translateX(0%)', display:'block' } }>
                <ul className={styles.burgerMenu}>
                    {nameTheme.map((theme, index) => {
                        return <li className={styles.burgerMenuNameDesk} key={index}>{theme}</li>
                    })}
                </ul>
            </div>
        </header>
    )
}