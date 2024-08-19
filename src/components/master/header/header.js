import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../style/header.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <ul className={styles.ulheadermobile}>
                <p className={styles.liheadermobile}>Mahan Rrezaei</p>
            </ul>

            {!menuOpen && (
                <button className={styles.burgerButton} onClick={toggleMenu}>
                    ☰
                </button>
            )}

            <ul className={`${styles.ulheader} ${menuOpen ? styles.menuOpen : ''}`}>
                <li className={styles.liheader}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${styles.aheader} ${styles.active} ${styles.homeButton}` : `${styles.aheader} ${styles.homeButton}`} end>Home</NavLink>
                </li>

                <li className={styles.liheader}>
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) =>
                            isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>Dashboard</NavLink>
                </li>
                <li className={styles.liheader}>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) =>
                            isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>Profile</NavLink>
                </li>
                <li className={styles.liheader}>
                    <NavLink
                        to="/Notfound"
                        className={({ isActive }) =>
                            isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>404 not found</NavLink>
                </li>
                <li className={`${styles.liheader} ${styles.liabout}`}>
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>Login</NavLink>
                </li>
                <button className={styles.closeButton} onClick={toggleMenu}>✖</button>
            </ul>
        </>
    );
}

export default Header;
