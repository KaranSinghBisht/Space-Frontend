import React from 'react'

import styles from './Button.module.css'

// TODO: Implement different states, e.g loading, disabled, etc.

export const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.container}>
      {children}
    </button>
  )
}
