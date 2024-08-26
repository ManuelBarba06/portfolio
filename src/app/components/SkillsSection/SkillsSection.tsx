import React from 'react'

import styles from './SkillsSection.module.css'
import Title from '../Title/Title'
import Carousel from '../Carousel/Carousel'
import ItemCarousel from '../ItemCarousel/ItemCarousel'

import {skills} from '@/data/portfolioInformation.json'

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
            total={skills.frontEnd.length}
          >
            {
              skills.frontEnd.map(({name, picture, color}) => (
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
            total={skills.backEnd.length}
          >
            {
              skills.backEnd.map(({name, picture, color}) => (
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