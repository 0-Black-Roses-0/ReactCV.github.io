import React from 'react';
import styles from '../../style/footer.module.css';

function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p className={styles.footerP}>&copy; 2024 My Website. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
