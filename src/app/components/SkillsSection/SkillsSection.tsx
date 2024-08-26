import React from 'react'

import styles from './SkillsSection.module.css'
import Title from '../Title/Title'
import Carousel from '../Carousel/Carousel'
import ItemCarousel from '../ItemCarousel/ItemCarousel'

import json from '@/data/portfolioInformation.json'

const SkillsSection = () => {
  return (
    <div
      className={styles.skillsContainer}
    >
        <Title
          name="Skills"
        />

        <div
          className={styles.carouselContainer}
        >
          <Carousel
            name="Front-End"
            total={json.skills.frontEnd.length}
          >
            {
              json.skills.frontEnd.map(({name, picture, color}) => (
                <ItemCarousel
                  name={name}
                  image={picture}
                  color={color}
                  key={name}
                />
              ))
            }
          </Carousel>

          <br/>
          <Carousel
            name="Back-End"
            total={json.skills.backEnd.length}
          >
            {
              json.skills.backEnd.map(({name, picture, color}) => (
                <ItemCarousel
                  name={name}
                  image={picture}
                  color={color}
                  key={name}
                />
              ))
            }
          </Carousel>
        </div>
    </div>
  )
}

export default SkillsSection