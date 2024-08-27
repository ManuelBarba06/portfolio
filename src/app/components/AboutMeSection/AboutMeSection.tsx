import React from 'react'
import Image from 'next/image'

import styles from './AboutMeSection.module.css'

import profileImage from '../../../assets/perfil.jpg'
import Title from '../Title/Title'

import json from '@/data/portfolioInformation.json'

const AboutMeSection = () => {
  return (
    <div className={styles.aboutMeSectionContainer}>
        <Title
          name="About Me"
        />

        <div
            className={styles.infoContainer}
        >
            <div
                className={styles.description}
            >
                <p>{json.about_me}</p>
            </div>

            <div
                className={styles.profileContainer}
            >
                <div
                    className={styles.imageContainer}
                >
                    <Image
                        src={profileImage}
                        alt="profile image"
                        width={300}
                        height={300}
                    />
                </div>
                <h2>Manuel Barba</h2>
            </div>
        </div>
    </div>
  )
}

export default AboutMeSection