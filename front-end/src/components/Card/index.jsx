import React from 'react'

import styles from './Card.module.css'
import { IconLink } from '../IconLink'

export const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.editIcon}>
                <IconLink icon="edit" href="#" type="fas"/>
            </div>
            <p className={styles.title}>This is the title</p>
            <p>@username</p>
        </div>
    )
}