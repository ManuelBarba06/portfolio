import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import styles from './page.module.css'

import Header from "./components/Header/Header"

import WelcomeSection from "./components/WelcomeSection/WelcomeSection"
import AboutMeSection from "./components/AboutMeSection/AboutMeSection"
import SkillsSection from "./components/SkillsSection/SkillsSection"
import ProjectSection from "./components/ProjectsSection/ProjectSection"
import ContactSection from "./components/ContactSection/ContactSection"
import Footer from "./components/Footer/Footer"

export default function Home() {
  return (
    <main>
      <Header/>


      <div
        className={styles.divContainer}
      >
        <WelcomeSection/>
      </div>

      <div>
        <AboutMeSection/>
      </div>

      <div
        className={styles.divContainer}
      >
        <SkillsSection/>
      </div>

      <div
        className={styles.divContainer}
      >
        <ProjectSection/>
      </div>

      <div
        className={styles.divContainer}
      >
        <ContactSection/>
      </div>

      <Footer/>
    </main>
  )
}
