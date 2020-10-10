import React from 'react'

import { Navigation } from '../Navigation'
import { NavigationLink } from '../NavigationLink'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>Logo</h1>
      <Navigation>
        <NavigationLink exact to="/">
          Home
        </NavigationLink>
        <NavigationLink to="/explore">Explore</NavigationLink>
        <NavigationLink to="/forum">Forum</NavigationLink>
      </Navigation>
      <a href="/" className={styles.button}>Sign In</a>
    </header>
  )
}
