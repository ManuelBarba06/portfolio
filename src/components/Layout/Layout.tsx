import React, { ReactNode } from 'react'
import styles from '../../app/page.module.css'

import { Inter } from 'next/font/google'

import "../../app/globals.css"

const inter = Inter({ subsets: ['latin'] })

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <main className={`${styles.main} ${inter.className}`}>
        {children}
    </main>
  )
}

export default Layout