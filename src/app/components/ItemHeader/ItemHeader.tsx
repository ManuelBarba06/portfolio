'use client'

import React from 'react'

import styles from './ItemHeader.module.css'
import Link from 'next/link'

interface ItemHeaderProps {
    name: string
    id: string
}
const ItemHeader = ({name, id}: ItemHeaderProps) => {
  return (
    <Link href={""} className={styles.containerItemHeader} onClick={() => document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})}>
        <span className={styles.containerItemHeaderTitle}>{name}</span>
    </Link>
  )
}

export default ItemHeader