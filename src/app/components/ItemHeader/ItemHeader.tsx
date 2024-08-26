import React from 'react'

import styles from './ItemHeader.module.css'
import Link from 'next/link'

interface ItemHeaderProps {
    name: string
}
const ItemHeader = ({name}: ItemHeaderProps) => {
  return (
    <Link href="/" className={styles.containerItemHeader}>
        <span className={styles.containerItemHeaderTitle}>{name}</span>
    </Link>
  )
}

export default ItemHeader