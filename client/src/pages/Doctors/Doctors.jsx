import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThLarge, faBars } from '@fortawesome/free-solid-svg-icons'

import styles from './styles.module.scss'

import { DocListBlock } from '../../components/DocListBlock/DocListBlock'

export const Doctors = () => {
    return (
        <div className={styles.doctorsWrapper}>
            <div className={styles.docHeader}>
                <h2>2245 Doctors found</h2>
                <div className={styles.sortBlock}>
                    <button>
                        <FontAwesomeIcon icon={faThLarge} />
                    </button>
                    <button className={styles.active}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            <div className={styles.docContent}>
                <DocListBlock docId={1} />
                <DocListBlock docId={2} />
            </div>
        </div>
    )
}
