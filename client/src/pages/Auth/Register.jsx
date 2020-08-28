import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import authBanner from '../../assets/authBanner.png'

export const Register = ({ type }) => {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authBanner}>
                <img src={authBanner} alt="Banner" />
            </div>
            <div className={styles.loginForm}>
                <div className={styles.headerForm}>
                    <h4>Patient Register</h4>
                    <Link className={styles.choiseType} to="/registerDoc">
                        Are you a Doctor?
                    </Link>
                </div>
                <div className={styles.inputForm}>
                    <input type="text" placeholder="Name" />
                </div>
                <div className={styles.inputForm}>
                    <input type="text" placeholder="Email" />
                </div>
                <div className={styles.inputForm}>
                    <input type="password" placeholder="Password" />
                </div>
                <Link to="/forgot-password">Forgot Password ?</Link>
                <button className={styles.loginBtn}>Register</button>
                <hr />
                <div className={styles.regLinkBlock}>
                    Already have an account?{' '}
                    <Link className={styles.regLink} to="/login">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}
