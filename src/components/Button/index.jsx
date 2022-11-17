import React from 'react'
import styles from './styles.module.scss'

export const Button = ({ text, onClick, disabled }) => (
  <button className={styles.button} type="button" onClick={onClick} disabled={disabled}>
    {text}
  </button>
)
