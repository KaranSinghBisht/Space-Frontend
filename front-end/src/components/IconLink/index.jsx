import React from 'react'
import { Icon } from '../Icon'

import styles from './IconLink.module.css'

export const IconLink = ({ href, icon, type }) => {
  return (
    <a href={href} className={styles.container}>
      <Icon icon={icon} type={type} />
    </a>
  )
}
