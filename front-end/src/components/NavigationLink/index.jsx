import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './NavigationLink.module.css'

export const NavigationLink = ({ to, children, exact }) => {
  return (
    <li>
      <NavLink
        activeClassName={styles.active}
        className={styles.container}
        to={to}
        exact={exact}
      >
        {children}
      </NavLink>
    </li>
  )
}
