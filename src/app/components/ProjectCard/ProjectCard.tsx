import React from 'react'
import Image from 'next/image'

import styles from './ProjectCard.module.css'

interface ProjectCardProps {
  name: string
  description: string
  picture: string
  technologies: string[]
}

const ProjectCard = ({name, description, picture, technologies}: ProjectCardProps) => {
  return (
    <div
      className={styles.cardContainer}
    >
      <Image
        src={picture}
        alt={"Project Image"}
        width={600}
        height={400}
      />

      <h2>{name}</h2>

      <p>
        {description}
      </p>

      <div
        className={styles.overCardContainer}
      >
        <div
          className={styles.contentContainer}
        >
          <h2>Technologies</h2>

          <div
            className={styles.technologiesContainer}
          >
            {
              technologies.map((technology) => (
                <span
                  key={technology}
                  className={styles.technologyPill}
                >
                  {technology}
                </span>
              ))
            }
          </div>

          <button
            className={styles.buttonContainer}
          >See more</button>
        </div>
        <div
          className={styles.divBottom}
        />
      </div>
    </div>
  )
}

export default ProjectCard