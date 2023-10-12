import React from 'react'
import styles from './MainButtons.module.css'
import MainButton from '../MainButton/MainButton'

const MainButtons = () => {
  
  return (
    <div className={styles.mainButtonsContainer}>
      <MainButton name='About' href='/'/>
      <MainButton name='Projects' href='/'/>
      <MainButton name='Contact' href='/'/>
    </div>
  )
}

export default MainButtons