import React, { useEffect, useState } from 'react'
import CryptoJS from 'crypto-js'

import styles from './styles.module.scss'
import { SeedPhrases } from '../components/SeedPhrases'
import { Interactive } from '../components/Interactive'
import { Encrypted } from '../components/Encrypted'
import { Amount } from '../components/Amount'

function App () {
  const [error, setError] = useState('')
  const [hash, setHash] = useState('')
  const [encryptionKey, setEncryptionKey] = useState('')
  const [amountPhrases, setAmountPhrases] = useState('24')
  const [arraySeedPhrase, setArraySeedPhrase] = useState(Array(+amountPhrases).fill(''))
  const [encryptable, setEncryptable] = useState(true)

  const [encryptableClassName, setEncryptableClassName] = useState('')
  const [buttonText, setButtonText] = useState('Encrypt')

  const toggleEncryptable = () => {
    if (encryptable) {
      setEncryptableClassName(styles.decryptable)

      setTimeout(() => {
        setAmountPhrases('0')
        setButtonText('Decrypt')
      }, 350)
    }
    if (!encryptable) {
      setEncryptableClassName(styles.encryptable)

      setTimeout(() => {
        setAmountPhrases('24')
        setHash('')
        setButtonText('Encrypt')
      }, 350)
    }
    setEncryptable(prev => !prev)
  }

  useEffect(() => setArraySeedPhrase(Array(+amountPhrases).fill('')), [amountPhrases])

  const encrypt = () => {
    setHash(CryptoJS.AES.encrypt(arraySeedPhrase.join(' '), encryptionKey).toString())
  }
  const decrypt = () => {
    const decr = CryptoJS.AES.decrypt(hash, encryptionKey).toString(CryptoJS.enc.Utf8)
    if (decr) {
      setArraySeedPhrase(decr.split(' '))
      setError('')
    } else {
      setAmountPhrases('0')
      setArraySeedPhrase([])
      setError('Something went wrong, try again')
    }
  }

  window.XMLHttpRequest = null
  window.fetch = null
  window._restoredFetch = null

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Amount amount={amountPhrases} setAmount={setAmountPhrases} encryptable={encryptable}/>

        <div className={`${styles.top} ${encryptableClassName}`}>
          <SeedPhrases arraySeedPhrase={arraySeedPhrase} setArraySeedPhrase={setArraySeedPhrase}/>
        </div>
        <div className={`${styles.bottom} ${encryptableClassName}`}>
          <Interactive
            encryptable={encryptable}
            toggleEncryptable={toggleEncryptable}
            encryptionKey={encryptionKey}
            setEncryptionKey={setEncryptionKey}
            buttonText={buttonText}
            encrypt={encrypt}
            decrypt={decrypt}
          />
          <Encrypted encryptable={encryptable} hash={hash} setHash={setHash}/>
          {error ? <div className={styles.error}>{error}</div> : null}
        </div>
      </div>
    </div>
  )
}

export default App
