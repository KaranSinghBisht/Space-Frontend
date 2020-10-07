import React from 'react'

import styles from './SectionCard.module.css'
import { Icon } from '../Icon'

export const SectionCard = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        This is a Title
        <p className={styles.username}>User Name</p>
      </h1>
      <div
        onClick={() => console.log('Clicked Edit button')}
        className={styles.icon}
      >
        <Icon iconType="far" icon="edit" />
      </div>
    </div>
  )
}
