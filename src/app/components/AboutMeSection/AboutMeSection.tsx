import React from 'react'
import Image from 'next/image'

import styles from './AboutMeSection.module.css'

import profileImage from '../../../assets/perfil.jpg'

const AboutMeSection = () => {
  return (
    <div className={styles.aboutMeSectionContainer}>
        <h1>About me</h1>

        <div
            className={styles.infoContainer}
        >
            <div
                className={styles.description}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis condimentum libero et egestas. Vivamus lobortis rutrum condimentum. Integer suscipit metus sed neque cursus mattis. Nunc in tortor ac ex blandit sodales. Duis vitae posuere augue, et laoreet ipsum. Donec ac molestie mauris. Maecenas iaculis orci in egestas cursus.</p>
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