import {FaLinkedinIn, FaGithub} from "react-icons/fa"

import styles from './page.module.css'

import Header from "./components/Header/Header"

import WelcomeSection from "./components/WelcomeSection/WelcomeSection"
import AboutMeSection from "./components/AboutMeSection/AboutMeSection"
import SkillsSection from "./components/SkillsSection/SkillsSection"

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
    </main>
  )
}
