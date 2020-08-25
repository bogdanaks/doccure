import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'
import doc01 from '../../assets/docs/doc01.jpg'

import { RatingStars } from '../../components/RatingStars/RatingStars'
import { DocBookingTable } from '../../components/DocBookingTable/DocBookingTable'

export const DocBooking = () => {
    return (
        <div className={styles.docBooking}>
            <div className={styles.contentWrapper}>
                <div className={styles.header}>
                    <div className={styles.docProfile}>
                        <div className={styles.photo}>
                            <img src={doc01} alt="Doctor" />
                        </div>
                        <div className={styles.docInfo}>
                            <h4>Dr. Darren Elder</h4>
                            <RatingStars isOverall />
                            <div className={styles.docInfoLocation}>
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span>Newyork, USA</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.todayDate}>
                    <h4>11 November 2019</h4>
                    <span>Monday</span>
                </div>
                <DocBookingTable />
                <button className={styles.btnPay}>Proceed to Pay</button>
            </div>
        </div>
    )
}
