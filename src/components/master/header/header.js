import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../../style/header.module.css';

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

        </ul>
    );
}

export default Header;
