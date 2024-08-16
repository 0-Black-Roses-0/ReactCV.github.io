import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../style/header.module.css'; // مسیر فایل استایل

function Header() {
    return (
        <ul className={styles.ulheader}>
            <li className={styles.liheader}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? `${styles.aheader} ${styles.active}` : styles.aheader} end>Home</NavLink>
            </li>

            <li className={styles.liheader}>
                <NavLink
                    to="/dashboard"
                    className={({ isActive }) =>
                        isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>Dashbard</NavLink>
            </li>
            
            <li className={styles.liheader}>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>About</NavLink>
            </li>

            <li className={`${styles.liheader} ${styles.liabout}`}>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? `${styles.aheader} ${styles.active}` : styles.aheader}>Login</NavLink>
            </li>

        </ul>
    );
}

export default Header;
