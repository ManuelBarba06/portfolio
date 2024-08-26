import React from 'react'

import styles from './Title.module.css'

interface TitleProps {
    name: string
}

const Title = ({name}: TitleProps) => {
  return (
    <h1 className={styles.title}>{name}</h1>
  )
}

export default Title