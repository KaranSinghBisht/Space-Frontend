import React from 'react'

import { RegisterNewsletter } from '../RegisterNewsletter'
import { IconGroup } from '../IconGroup'
import { IconLink } from '../IconLink'

import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <RegisterNewsletter onSubmit={(e) => console.log(e)} />
      <IconGroup>
        <IconLink
          iconType="fab"
          icon="github"
          href="https://github.com/KaranSinghBisht/Space-Frontend"
        />
        <IconLink iconType="fab" icon="facebook" href="#" />
      </IconGroup>
    </footer>
  )
}
