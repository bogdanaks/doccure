import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

export const DocBookingTable = () => {
    return (
        <div className={styles.docTable}>
            <div className={styles.tableHeader}>
                <button className={styles.arrowLeft}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className={styles.headerDates}>
                    <div className={styles.date}>
                        <h4>MON</h4>
                        <span>20 AUG 2020</span>
                    </div>
                    <div className={styles.date}>
                        <h4>TUE</h4>
                        <span>21 AUG 2020</span>
                    </div>
                    <div className={styles.date}>
                        <h4>WED</h4>
                        <span>22 AUG 2020</span>
                    </div>
                    <div className={styles.date}>
                        <h4>THU</h4>
                        <span>23 AUG 2020</span>
                    </div>
                    <div className={styles.date}>
                        <h4>FRI</h4>
                        <span>24 AUG 2020</span>
                    </div>
                    <div className={styles.date}>
                        <h4>SAT</h4>
                        <span>25 AUG 2020</span>
                    </div>
                    <div className={styles.date}>
                        <h4>SUN</h4>
                        <span>26 AUG 2020</span>
                    </div>
                </div>
                <button className={styles.arrowRight}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
            </div>
            <div className={styles.btns}>
                <div className={styles.btnsCol}>
                    <button>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
                <div className={styles.btnsCol}>
                    <button className={styles.activeBtn}>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
                <div className={styles.btnsCol}>
                    <button>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
                <div className={styles.btnsCol}>
                    <button className={styles.disBtn}>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
                <div className={styles.btnsCol}>
                    <button>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
                <div className={styles.btnsCol}>
                    <button>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
                <div className={styles.btnsCol}>
                    <button>9:00</button>
                    <button>10:00</button>
                    <button>11:00</button>
                    <button>12:00</button>
                    <button>13:00</button>
                    <button>14:00</button>
                    <button>15:00</button>
                    <button>16:00</button>
                    <button>17:00</button>
                    <button>18:00</button>
                </div>
            </div>
        </div>
    )
}
