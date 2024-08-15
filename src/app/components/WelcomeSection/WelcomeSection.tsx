import React from 'react'

import styles from './WelcomeSection.module.css'

const WelcomeSection = () => {
  return (
    <div className={styles.containerWelcomeSection}>
        <h1>Hi</h1>
        <h1>I'm <span>Manuel Barba</span></h1>
        <h1>Full-Stack Developer</h1>
    </div>
  )
}

export default WelcomeSection