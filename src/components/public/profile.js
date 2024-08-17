import React from 'react';
import styles from '../style/profile.module.css';
import Profileimg from '../img/pfp.png';

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileHeader}>
                <img
                    src={Profileimg}
                    alt="User Avatar"
                    className={styles.profileAvatar}
                />
                <p className={styles.profileName}>Mahan Rezaei</p>
                <p className={styles.profiledata}>Project Manager</p>
            </div>

            <div className={styles.profileDetails}>
                <div className={styles.card}>
                    <h3>Account Details</h3>
                    <form>
                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    placeholder="First Name"
                                    value="Mahan"
                                    className={styles.formControl}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    placeholder="Last Name"
                                    value="Rezaei"
                                    className={styles.formControl}
                                />
                            </div>
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="Email"
                                    value="mahan@example.com"
                                    className={styles.formControl}
                                />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="Password"
                                    className={styles.formControl}
                                />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="address">Address</label>
                            <input
                                type="text"
                                id="address"
                                placeholder="1234 Main St"
                                className={styles.formControl}
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" placeholder="City" className={styles.formControl} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="state">State</label>
                                <input type="text" id="state" placeholder="State" className={styles.formControl} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="zip">Zip</label>
                                <input type="text" id="zip" placeholder="Zip" className={styles.formControl} />
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="description">Description</label>
                            <textarea
                                id="description"
                                rows="5"
                                placeholder="A brief description about yourself"
                                className={styles.formControl}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </textarea>
                        </div>

                        <button type="submit" className={styles.updateButton}>
                            Update Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
