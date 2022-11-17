import React from 'react'
import styles from './styles.module.scss'

export const Encrypted = ({ encryptable, hash, setHash }) => {
  const onChange = (e) => setHash(e?.target?.value.replace(/\s/g, ''))

  const copyText = (e) => {
    if (e?.target) {
      e.target.nextSibling.select()
      document.execCommand('copy')
      window.getSelection().removeAllRanges()
      e.target.classList.add(styles.animation)

      setTimeout(() => e.target.classList.remove(styles.animation), 1000)
    }
  }

  return (
     <div className={`${styles.encrypted} ${encryptable ? styles.encryptable : ''}`}>
       <button type={'button'} className={styles.copyBtn} onClick={copyText}>
         <svg width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000" preserveAspectRatio="xMidYMid meet">
           <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)" stroke="none">
             <path d="M564 2237 c-3 -8 -4 -47 -2 -88 l3 -74 632 -3 633 -2 2 -873 3 -872 85 0 85 0 3 925 c1 644 -1 933 -9 951 -5 15 -22 31 -35 38 -40 18 -1393 16 -1400 -2z"/>
             <path d="M269 1901 l-29 -29 0 -694 0 -693 243 -242 242 -243 452 0 452 0 28 24 28 24 0 917 0 917 -28 24 -28 24 -665 0 -666 0 -29 -29z m1241 -936 l0 -785 -314 0 -315 0 -3 200 -3 200 -28 27 -27 28 -200 3 -200 4 0 554 0 554 545 0 545 0 0 -785z m-790 -597 l0 -113 -105 105 c-58 58 -105 108 -105 112 0 5 47 8 105 8 l105 0 0 -112z"/>
           </g>
         </svg>
       </button>

      <input type='text' className={styles.input} spellCheck="false" value={hash} onChange={onChange}/>
    </div>
  )
}
