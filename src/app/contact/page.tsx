import Title from '@/components/Title/Title'
import SocialMediaButton from '@/components/socialMediaButton/SocialMediaButton'

import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import styles from './page.module.css'


const page = () => {
  return (
    <>
        <Title name='Contact'/>
        <div className={styles.container}>
            <h1>SAY <span className={styles.secondary}>HELLO</span></h1>
            <div className={styles.infoContainer}>
                <div className={styles.emailContainer}>
                    <h2>EMAIL:</h2>
                    <a href='mailto:mabg0610.oficial@gmail.com'>mabg0610.oficial@gmail.com</a>
                </div>
                <div className={styles.socialMediaContainer}>
                    <SocialMediaButton name='Linkedin' link="https://www.linkedin.com/in/manuel-barba/">
                        <FaLinkedinIn/>
                    </SocialMediaButton>
                    <br/>
                    <SocialMediaButton name='Github' link={"https://github.com/ManuelBarba06"}>
                        <FaGithub/>
                    </SocialMediaButton>
                </div>
            </div>
        </div>
    </>
  )
}

export default page