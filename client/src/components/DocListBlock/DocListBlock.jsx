import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar,
    faMapMarkerAlt,
    faTooth,
    faPhone,
    faVideo,
} from '@fortawesome/free-solid-svg-icons'
import {
    faComment,
    faMoneyBillAlt,
    faThumbsUp,
    faBookmark,
    faCommentAlt,
} from '@fortawesome/free-regular-svg-icons'

import styles from './styles.module.scss'
import doc01 from '../../assets/docs/doc01.jpg'

export const DocListBlock = ({ docId }) => {
    const { id } = useParams()
    return (
        <div className={styles.docBlock}>
            <div className={styles.docInfoLeft}>
                <div className={styles.docImg}>
                    <img src={doc01} alt="Doctor" />
                </div>
                <div className={styles.docInfoContent}>
                    <h4 className={styles.docName}>Dr. Ruby Perrin</h4>
                    <p className={styles.docInfo}>
                        MDS - Periodontology and Oral Implantology, BDS
                    </p>
                    <div className={styles.docSpec}>
                        <FontAwesomeIcon icon={faTooth} />
                        <span>Dentist</span>
                    </div>
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
                        <span>(17)</span>
                    </div>
                    <div className={styles.docGeo}>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Florida, USA</span>
                    </div>
                    <div className={styles.docTags}>
                        <ul>
                            <li>Dental Fillings</li>
                            <li>Whitneing</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.docInfoRight}>
                <div className={styles.rightInfo}>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faThumbsUp} />
                            <span>98%</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faComment} />
                            <span>17 Feedback</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <span>Florida, USA</span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faMoneyBillAlt} />
                            <span>$300 - $1000</span>
                        </li>
                    </ul>
                    {id && (
                        <ul className={styles.docRelations}>
                            <li>
                                <button className={styles.btnBookmark}>
                                    <FontAwesomeIcon icon={faBookmark} />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faCommentAlt} />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faPhone} />
                                </button>
                            </li>
                            <li>
                                <button>
                                    <FontAwesomeIcon icon={faVideo} />
                                </button>
                            </li>
                        </ul>
                    )}
                    <div className={styles.docBtns}>
                        {!id && (
                            <Link to={'/doctors/' + docId} className={styles.btnView}>
                                VIEW PROFILE
                            </Link>
                        )}
                        <Link to="/" className={styles.btnBookAppointment}>
                            BOOK APPOINTMENT
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
