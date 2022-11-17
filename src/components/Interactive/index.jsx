import React from 'react'
import { Button } from '../Button'
import { Swap } from '../Swap'
import styles from './styles.module.scss'
import { Key } from '../Key'

export const Interactive = ({ encryptable, toggleEncryptable, encryptionKey = '', setEncryptionKey, encrypt, decrypt, buttonText }) => {
  return (
    <div className={styles.wrapper}>
      <Key encryptionKey={encryptionKey} setEncryptionKey={setEncryptionKey}/>
      <Button text={buttonText} onClick={encryptable ? encrypt : decrypt}/>
      <Swap toggleEncryptable={toggleEncryptable}/>
    </div>
  )
}
