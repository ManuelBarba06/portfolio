import Image from 'next/image'

import Title from '@/components/Title/Title'

import { aboutData } from '@/data/aboutData'

import styles from './page.module.css'

import profilePic from '../../assets/perfil.jpg'

const index = () => {
  return (
    <>
      <Title name='about'/>
      <div className={styles.container}>
        <div className={styles.textDiv}>
          <h1 className={styles.subtitle}>{"I'm"} <span>Manuel Barba</span>. Software developer</h1>
          <p className={styles.description}>
             {aboutData.description}
          </p>
        </div>
        <div className={styles.pictureDiv}>
          <Image
            src={profilePic}
            alt='User profile'
            />
        </div>
      </div>
    </>
  )
}

export default index