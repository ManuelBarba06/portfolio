import Image from 'next/image'

import Layout from '@/components/Layout/Layout'
import Title from '@/components/Title/Title'

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget pretium ligula. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent eleifend ullamcorper efficitur. Ut egestas ut neque at mollis. Ut id ornare purus,
              at pellentesque arcu. Mauris sagittis leo lectus, ac iaculis lorem fringilla non. 
              Etiam a leo quis nisl gravida vulputate. Ut quis lorem id est mollis tincidunt. Vivamus congue viverra mi sed pulvinar. Phasellus ac nunc quam. Suspendisse odio enim, feugiat et consectetur vitae, pulvinar sit amet ante. Morbi eu ultricies magna.
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