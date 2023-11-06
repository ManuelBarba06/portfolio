'use client'

import { useCallback, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import styles from './page.module.css'

import MainTitle from '@/components/MainTitle/MainTitle'
import MainButtons from '@/components/MainButtons/MainButtons'

import { Inter } from 'next/font/google'
import Layout from "@/components/Layout/Layout"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  
  const router = useRouter()
  
  let index = 0
  const konamiCode = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"]
  
  const konamiFunction = useCallback((e: KeyboardEvent) => {
    if (konamiCode[index] === e.key){
      index++
    } else{
      index = 0
    }
    if (konamiCode.length === index){
      router.push('/games')
    }
  },[])
  
  useEffect(() => {
    document.addEventListener("keydown",konamiFunction,false)
  },[konamiFunction])
  
  return (
    <Layout>
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
    </Layout> 
  )
}
