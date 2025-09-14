import React from "react";
import styles from './styles.module.scss'

interface Header {

}

export const Header: React.FC<Header> = () => {
    return (
        <header className={styles.burger}>
            <div className={styles.burgerContainer}>
                <label className={styles.burgerContainerLabel} htmlFor="input-burger">asdasd   </label>
                <input className={styles.burgerContainerCheckbox} type="checkbox" id="input-burger" />
            </div>
            <h2 className={styles.burgerTitle}>BESIDER</h2>
        </header>
    )
}