import React from 'react'
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io5'

import styles from './ContactSection.module.css'
import Title from '../Title/Title'



const ContactSection = () => {
  return (
    <div
      className={styles.contactContainer}
    >
        <Title
          name="Contact"
        />

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet ipsum ut purus finibus vulputate id ut augue. Phasellus sed risus at lectus pellentesque tempus.</p>
   
        <div
          className={styles.linksContainer}
        >
            <a
                href="https://linkedin.com/in/manuel-barba"
                target="_blank"
                rel="noreferrer"
                className={styles.linkContainer}
            >
                <IoLogoLinkedin
                    size={"3vw"}
                />
                <span
                    className={styles.linkSpan}
                >
                    Linkedin
                </span>
            </a>

            <a
                href="https://github.com/ManuelBarba06"
                target="_blank"
                rel="noreferrer"
                className={styles.linkContainer}
            >
                <IoLogoGithub
                    size={"3vw"}
                />
                <span
                    className={styles.linkSpan}
                >
                    Github
                </span>
            </a>
        </div>
    </div>
  )
}

export default ContactSection