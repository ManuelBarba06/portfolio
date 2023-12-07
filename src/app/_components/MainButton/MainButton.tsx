import Link from 'next/link'
import React from 'react'
import styles from './MainButton.module.css'

interface MainButtonProps {
    name: string,
    href: string
}

const MainButton = ({name, href}:MainButtonProps) => {
  return (
    <Link href={href} className={styles.link}>
        {name.toUpperCase()}
    </Link>
  )
}

export default MainButton