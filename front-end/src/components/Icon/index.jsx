import React from 'react'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Icon.module.css'

library.add(faGithub, faFacebook)

export const Icon = ({ icon }) => {
  return (
    <FontAwesomeIcon
      size="lg"
      className={styles.container}
      icon={['fab', icon]}
    />
  )
}
