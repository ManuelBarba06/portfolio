'use client'

import React, { useEffect, useRef, useState } from 'react'

import styles from './Carousel.module.css'

interface CarouselProps {
    name: string
    total: number
    children: React.ReactNode
}

const Carousel = ({name, children, total} : CarouselProps) => {

  const itemsPerSlide = total > 5 ? 5 : total;

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      moveNext()
    }, 3000)
    return () => clearInterval(intervalId)
  }, [children])

  const moveNext = () => {
    setCurrentIndex((prevIndex) => {
      return prevIndex === total - itemsPerSlide ? 0 : prevIndex + 1}
    )
  }

  return (
    <div>
        <h2 className={styles.titleCoursel}>{name}</h2>
        <div
            className={styles.carousel}
        >
            <div
                className={styles.carouselContainer}
                style={{
                    transform: `translateX(-${currentIndex * (100 / itemsPerSlide)}%)`
                }}
            >
                {children}
            </div>
        </div>
    </div>
  )
}

export default Carousel