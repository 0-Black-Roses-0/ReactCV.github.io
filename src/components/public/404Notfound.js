import React from 'react'
import styles from '../style/404Notfound.module.css';

function Notfound() {
    return (
        <div className={styles.main}>
            <div className={styles.fof}>
                <h1>Error 404</h1>
            </div>
        </div>
    );
}

export default Notfound;