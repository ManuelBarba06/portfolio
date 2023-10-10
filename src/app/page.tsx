import Image from 'next/image'

import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import styles from './page.module.css'

import MainTitle from '@/components/MainTitle/MainTitle'
import MainButtons from '@/components/MainButtons/MainButtons'

import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${styles.main} ${inter.className}`}>
      <div className={styles.mainContainer}>
        <MainTitle/>
        <MainButtons/>
      </div>
      <div className={styles.mainSocial}>
        <a href={"https://www.linkedin.com/in/manuel-barba/"} target='_blank'>
          <FaLinkedinIn/>
        </a>
        <a href={"https://github.com/ManuelBarba06"} target='_blank'>
          <FaGithub/>
        </a>
      </div>
    </main> 
  )
}
