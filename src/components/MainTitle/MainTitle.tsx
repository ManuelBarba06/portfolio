import React from 'react'
import styles from './MainTitle.module.css'

const MainTitle = () => {
  return (
    <div className={styles.mainTitleContainer}>
        <h1 className={styles.mainTitle}>Hi</h1>
        <h1 className={styles.mainTitle}>{"I'm"} <span>Manuel Barba</span></h1>
        <h1 className={styles.mainTitle}>Developer</h1>
    </div>
  )
}

export default MainTitle