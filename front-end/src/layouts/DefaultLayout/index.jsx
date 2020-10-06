import React from 'react'
import { Footer } from '../../components/Footer'

import styles from './DefaultLayout.module.css'

export const DefaultLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <h1>Header</h1>
      {children}
      <Footer />
    </div>
  )
}
