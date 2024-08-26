import React from 'react'
import Image from 'next/image'

import styles from './ItemCarousel.module.css'

interface ItemCarouselProps {
    name: string
    image: string
    color: string
}

const ItemCarousel = ({name, image, color}: ItemCarouselProps) => {
  return (
    <div
      className={styles.itemCarouselContainer}
    >
        <div
          className={styles.containerInfo}
        >
          <Image
              src={image}
              alt={name}
              width={125}
              height={125}
          />
          <span>{name}</span>
          <div className={styles.progressBar} style={{backgroundColor: color}}/>
        </div>
    </div>
  )
}

export default ItemCarousel