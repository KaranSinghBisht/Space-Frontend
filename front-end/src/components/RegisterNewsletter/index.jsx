import React from 'react'

import styles from './RegisterNewsletter.module.css'
import { Button } from '../Button'
import { Input } from '../Input'

export const RegisterNewsletter = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(e)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <Input name="email" placeholder="e-mail" />
      <Button>Register</Button>
    </form>
  )
}
