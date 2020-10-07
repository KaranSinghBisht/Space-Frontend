import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-regular-svg-icons'
import styles from './Icon.module.css'

library.add(faGithub, faFacebook, faEdit)
// Note: iconType represents the package of icons Ex.  'far' or 'fab'
export const Icon = ({ iconType, icon }) => {
  return (
    <FontAwesomeIcon
      size="lg"
      className={styles.container}
      icon={[iconType, icon]}
    />
  )
}
