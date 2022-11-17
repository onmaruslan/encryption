import React, { useState } from 'react'
import styles from './styles.module.scss'

export const Input = ({ value: valueProp, onChange, index }) => {
  const [isValid, setIsValid] = useState(false)

  const handleChange = (e) => {
    if (isValid) onChange(e.target.value, index)
  }

  const onKeyDown = (e) => {
    const $parent = e?.target?.parentElement
    if ((e.key === 'Enter' || e.key === ' ') && $parent?.nextSibling) {
      setIsValid(false)
      $parent.nextSibling?.firstChild?.focus()
    } else if (e.key === 'Backspace' && valueProp === '' && $parent?.previousSibling) {
      setIsValid(false)
      $parent.previousSibling?.firstChild?.focus()
    } else setIsValid(true)
  }

  return (
    <div className={styles.inputWrapper}>
      <input type='text'
             value={valueProp}
             onKeyDown={onKeyDown}
             onChange={handleChange}
             className={styles.input}
      />
      <div className={styles.index}>{index + 1}</div>
    </div>
  )
}
