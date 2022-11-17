import React from 'react'
import styles from './styles.module.scss'

export const Amount = ({ amount = '24', setAmount, encryptable }) => {
  const onChange = ({ target: { value: val } }) => {
    setAmount((prev) => {
      if (!val) return '0'

      if (/[0-9]|\./.test(val)) {
        if (+val > 50) return '52'
        if (+val < 0) return '0'
        if (val.startsWith('0')) return val.toString().slice(1)

        return val.toString()
      }

      return prev
    })
  }

  return (
    <div className={`${styles.amount} ${!encryptable ? styles.decryptable : ''}`}>
      <input
        value={amount}
        onChange={onChange}
        className={styles.input}
        type="number"
      />
    </div>
  )
}
