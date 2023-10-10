import Image from 'next/image'
import styles from './page.module.css'
import MainTitle from '@/components/MainTitle/MainTitle'
import { Inter } from 'next/font/google'
import MainButtons from '@/components/MainButtons/MainButtons'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.mainContainer}>
        <MainTitle/>
        <MainButtons/>
      </div>
    </main> 
  )
}
