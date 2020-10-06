import React from 'react'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

import styles from './DefaultLayout.module.css'

export const DefaultLayout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);
