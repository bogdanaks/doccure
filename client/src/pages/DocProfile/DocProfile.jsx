import React from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

import { DocListBlock } from '../../components/DocListBlock/DocListBlock'
import { DocComment } from '../../components/DocComment/DocComment'

export const DocProfile = () => {
    const { docId } = useParams()
    const [selectMenu, setSelectMenu] = React.useState(1)
    const handleSelectMenu = (e) => {
        setSelectMenu(Number(e.target.name))
    }
    return (
        <div className={styles.docProfileWrapper}>
            <DocListBlock docId={docId} />
            <div className={styles.docContent}>
                <div className={styles.btnsMenu}>
                    <ul>
                        <li>
                            <button
                                className={selectMenu === 1 ? styles.active : ''}
                                name="1"
                                onClick={handleSelectMenu}>
                                Overview
                            </button>
                        </li>
                        <li>
                            <button
                                className={selectMenu === 2 ? styles.active : ''}
                                name="2"
                                onClick={handleSelectMenu}>
                                Reviews
                            </button>
                        </li>
                        <li>
                            <button
                                className={selectMenu === 3 ? styles.active : ''}
                                name="3"
                                onClick={handleSelectMenu}>
                                Business Hours
                            </button>
                        </li>
                    </ul>
                </div>
                {selectMenu === 1 && (
                    <div className={styles.docOverview}>
                        <div className={styles.docOverviewAbout}>
                            <h4>About Me</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className={styles.docServices}>
                            <h4>Services</h4>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Tooth cleaning</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Composite Bonding</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Root Canal Therapy</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Fissure Sealants</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Implants</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Surgical Extractions</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.docSpecializations}>
                            <h4>Specializations</h4>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Children Care</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Orthodontist</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Dental Care</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Periodontist</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Oral and Maxillofacial Surgery</span>
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <span>Prosthodontics</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                )}
                {selectMenu === 2 && (
                    <div className={styles.docReviews}>
                        <DocComment />
                        <DocComment />
                    </div>
                )}
                {selectMenu === 3 && (
                    <div className={styles.docHours}>
                        <div className={styles.workingTime}>
                            <div className={styles.workingTimeHeader}>
                                <div className={styles.today}>
                                    <h4>Today</h4>
                                    <span>23 Aug 2020</span>
                                </div>
                                <div className={styles.todayWork}>
                                    <span className={styles.openNow}>Open Now</span>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                            </div>
                            <div className={styles.workingTimeWeek}>
                                <div className={styles.rowWeek}>
                                    <h4>Monday</h4>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                                <div className={styles.rowWeek}>
                                    <h4>Tuesday</h4>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                                <div className={styles.rowWeek}>
                                    <h4>Wednesday</h4>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                                <div className={styles.rowWeek}>
                                    <h4>Thursday</h4>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                                <div className={styles.rowWeek}>
                                    <h4>Friday</h4>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                                <div className={styles.rowWeek}>
                                    <h4>Saturday</h4>
                                    <span className={styles.timeSpan}>07:00 AM - 09:00 PM</span>
                                </div>
                                <div className={styles.rowWeek}>
                                    <h4>Sunday</h4>
                                    <span className={styles.close}>Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
