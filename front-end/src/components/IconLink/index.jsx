import React from 'react'
import { Icon } from '../Icon'

import styles from './IconLink.module.css'

export const IconLink = ({ href, icon, iconType }) => {
  return (
    <a href={href} className={styles.container}>
      <Icon iconType={iconType} icon={icon} />
    </a>
  )
}
