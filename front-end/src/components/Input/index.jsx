import React, { useCallback, useState } from 'react'

import styles from './Input.module.css'

export const Input = ({ defaultValue, placeholder, onChange, name }) => {
  const [value, setValue] = useState(defaultValue)
  const handleChange = useCallback(
    (e) => {
      if (onChange) {
        return setValue(onChange(e.target.value))
      }

      return setValue(e.target.value)
    },
    [onChange]
  )

  return (
    <input
      className={styles.container}
      type="text"
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    />
  )
}
