import React from 'react'
import { NavLink, Link } from 'react-router-dom'
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
                <li>
                    <NavLink to="/" activeClassName={styles.active} exact>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/doctors" activeClassName={styles.active} exact>
                        Doctors
                    </NavLink>
                </li>
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
                    <Link to="/auth" className={styles.loginBtn}>
                        <span>Login / Signup</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
