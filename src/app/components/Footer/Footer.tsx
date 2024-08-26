import React from 'react'

import styles from './Footer.module.css'

import json from '@/data/portfolioInformation.json'

const Footer = () => {
  return (
    <footer
        className={styles.footerContainer}
    >
        <span>{json.developed}</span>
    </footer>
  )
}

export default Footer