import React from 'react'
import { Link } from 'react-router-dom'

import styles from './styles.module.scss'
import authBanner from '../../assets/authBanner.png'

export const Login = ({ type }) => {
    return (
        <div className={styles.authWrapper}>
            <div className={styles.authBanner}>
                <img src={authBanner} alt="Banner" />
            </div>
            <div className={styles.loginForm}>
                <div className={styles.headerForm}>
                    <h4>Login Doccure</h4>
                </div>
                <div className={styles.inputForm}>
                    <input type="text" placeholder="Email" />
                </div>
                <div className={styles.inputForm}>
                    <input type="password" placeholder="Password" />
                </div>
                <Link to="/forgotPassword">Forgot Password ?</Link>
                <button className={styles.loginBtn}>Login</button>
                <hr />
                <div className={styles.regLinkBlock}>
                    Don’t have an account?{' '}
                    <Link className={styles.regLink} to="/register">
                        Register
                    </Link>
                </div>
            </div>
        </div>
    )
}
