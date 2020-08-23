import React from 'react'

import styles from './styles.module.scss'
import patient from '../../assets/patient.jpg'

import { RatingStars } from '../../components/RatingStars/RatingStars'

export const DocComment = () => {
    return (
        <div className={styles.commentWrapper}>
            <div className={styles.photoBlock}>
                <div className={styles.photo}>
                    <img src={patient} alt="" />
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.name}>
                        <h4>Richard Wilson</h4>
                    </div>
                    <RatingStars rating={3} />
                </div>
                <div className={styles.date}>
                    <span>Reviewed 2 Days ago</span>
                </div>
                <div className={styles.title}>
                    <h4>I recommend the doctor</h4>
                </div>
                <div className={styles.message}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation. Curabitur non nulla sit amet nisl tempus
                    </p>
                </div>
            </div>
        </div>
    )
}
