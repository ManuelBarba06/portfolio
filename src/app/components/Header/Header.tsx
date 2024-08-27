import React from 'react'

import styles from './Header.module.css'
import ItemHeader from '../ItemHeader/ItemHeader'
import Select from '../Select/Select'

const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <span className={styles.namePrincipal}>
          Manuel.<span className={styles.tsText}>ts</span>
        </span>

        <div
          className={styles.containerItems}
        >
          <ItemHeader
            name="About Me"
            id="aboutMeSection"
          />

          <ItemHeader
            name="Skills"
            id="skillsSection"
          />

          <ItemHeader
            name="Projects"
            id="projectsSection"
          />

          <ItemHeader
            name="Contact"
            id="contactSection"
          />

          <Select />
        </div>
    </header>
  )
}

export default Header