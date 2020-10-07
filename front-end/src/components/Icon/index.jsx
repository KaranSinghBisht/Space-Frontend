import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import styles from './Icon.module.css'

library.add(faGithub, faFacebook, faEdit)

export const Icon = ({ icon, type }) => {
  return (
    <FontAwesomeIcon
      size="lg"
      className={styles.container}
      icon={[type, icon]}
    />
  )
}
