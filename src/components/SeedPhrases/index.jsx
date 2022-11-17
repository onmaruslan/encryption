import React from 'react'
import { Input } from '../Input'
import styles from './styles.module.scss'

export const SeedPhrases = ({ arraySeedPhrase, setArraySeedPhrase }) => {
  const handleSetArr = (val, index) => {
    setArraySeedPhrase(prev => ([...prev.slice(0, index), val, ...prev.slice(index + 1)]))
  }

  return (
    <div className={`${styles.seedPhrases}`}>
      {arraySeedPhrase.map((value, i) => <Input key={i} value={value} index={i} onChange={handleSetArr}/>)}
    </div>
  )
}
