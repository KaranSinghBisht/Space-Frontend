import React from 'react'

import styles from './SectionCard.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
export const SectionCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        This is a Title
        <p className={styles.username}>User Name</p>
      </h1>

      <FontAwesomeIcon
        onClick={() => console.log('Clicked Edit button')}
        size="sm"
        icon={faEdit}
        className={styles.icon}
        aria-hidden="true"
      ></FontAwesomeIcon>
    </div>
  )
}
