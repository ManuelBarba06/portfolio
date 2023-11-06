import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import styles from './page.module.css'

import MainTitle from '@/components/MainTitle/MainTitle'
import MainButtons from '@/components/MainButtons/MainButtons'

import { Inter } from 'next/font/google'

import SocialMediaButton from "@/components/SocialMediaButton/SocialMediaButton"


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.mainContainer}>
        <MainTitle/>
        <MainButtons/>
      </div>
      <div className={styles.mainSocial}>
        <SocialMediaButton link="https://www.linkedin.com/in/manuel-barba/">
          <FaLinkedinIn/>
        </SocialMediaButton>
        <SocialMediaButton link={"https://github.com/ManuelBarba06"}>
          <FaGithub/>
        </SocialMediaButton>
      </div>
    </> 
  )
}
