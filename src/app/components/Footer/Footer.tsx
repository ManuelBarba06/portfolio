import React from 'react'

import styles from './Footer.module.css'

import {footer} from '@/data/portfolioInformation.json'

const Footer = () => {
  return (
    <footer
        className={styles.footerContainer}
    >
        <span>{footer.information}</span>
    </footer>
  )
}

export default Footer