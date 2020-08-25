import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons'

import styles from './styles.module.scss'
import logo2 from '../../assets/logoWhite.png'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.col}>
                <div className={styles.logo}>
                    <img src={logo2} alt="Logo White" />
                </div>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                </p>
                <div className={styles.links}>
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
            </div>
            <div className={styles.col}>
                <h4>For Patients</h4>
                <ul>
                    <li>Search for Doctors</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Booking</li>
                    <li>Patient Dashboard</li>
                </ul>
            </div>
            <div className={styles.col}>
                <h4>For Doctors</h4>
                <ul>
                    <li>Appointments</li>
                    <li>Chat</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Doctor Dashboard</li>
                </ul>
            </div>
            <div className={styles.col}>
                <h4>For Doctors</h4>
                <ul>
                    <li>Appointments</li>
                    <li>Chat</li>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Doctor Dashboard</li>
                </ul>
            </div>
        </div>
    )
}
