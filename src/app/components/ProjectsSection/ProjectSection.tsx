import React from 'react'

import styles from './ProjectSection.module.css'
import Title from '../Title/Title'
import ProjectCard from '../ProjectCard/ProjectCard'

import json from '@/data/portfolioInformation.json'

const ProjectSection = () => {
  return (
    <div
      className={styles.projectsContainer}
    >
        <Title
          name="Projects"
        />

        <div
          className={styles.projectsGrid}
        >
          {
            json.projects.map((project) => (
              <ProjectCard
                key={project.name}
                {...project}
              />
            ))
          }
        </div>
    </div>
  )
}

export default ProjectSection