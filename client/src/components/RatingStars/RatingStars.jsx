import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

export const RatingStars = ({ rating, isOverall }) => {
    return (
        <div className={styles.docRating}>
            <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.star}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={[styles.star, styles.starDis].join(' ')}>
                <FontAwesomeIcon icon={faStar} />
            </div>
            {isOverall && <span>(17)</span>}
        </div>
    )
}
