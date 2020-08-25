import React from 'react'

import styles from './styles.module.scss'
import doc01 from '../../assets/docs/doc01.jpg'

export const DocBooking = () => {
    return (
        <div className={styles.docBooking}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <div className={styles.docProfile}>
                        <div className={styles.photo}>
                            <img src={doc01} alt="Doctor" />
                        </div>
                    </div>
                    <div className={styles.date}></div>
                    <div className={styles.table}></div>
                </div>
                <div className={styles.todayDate}>
                    <h4>11 November 2019</h4>
                    <span>Monday</span>
                </div>
            </div>
        </div>
    )
}
