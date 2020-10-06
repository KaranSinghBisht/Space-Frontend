import React from 'react'

import styles from './Navigation.module.css'

export const Navigation = ({ children }) => {
  return (
    <nav>
      <ul className={styles.listContainer}>{children}</ul>
    </nav>
  )
}
