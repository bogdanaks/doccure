import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import logo from '../../assets/logo.png'

export const Navbar = () => {
    return (
        <div className={styles.navbarWrapper}>
            <div className={styles.logo}>
                <img src={logo} alt="Logo" />
            </div>
            <ul className={styles.leftBtns}>
                <li className={styles.active}>Home</li>
                <li>Doctors</li>
            </ul>
            <ul className={styles.rightBtns}>
                <li className={styles.contactBlock}>
                    <div className={styles.ico}>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div className={styles.number}>
                        <span>Contact</span>
                        <span>+1 315 369 5943</span>
                    </div>
                </li>
                <li>
                    <button className={styles.loginBtn}>
                        <span>Login / Signup</span>
                    </button>
                </li>
            </ul>
        </div>
    )
}
