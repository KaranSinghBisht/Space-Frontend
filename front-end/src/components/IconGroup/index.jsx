import React from 'react'

import styles from './IconGroup.module.css'

export const IconGroup = ({ children }) => {
  return <div className={styles.container}>{children}</div>
}
