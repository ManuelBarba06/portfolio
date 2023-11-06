import { link } from 'fs'
import styles from './socialMediaButton.module.css'

interface socialMediaButtonProps {
    name?: string
    link: string
    children: JSX.Element
}

const SocialMediaButton = ({name,link,children}:socialMediaButtonProps) => {
  return (
    <a className={name ?styles.containerMediaNameButton :styles.containerMediaButton} href={link} target='_blank'>
          {
            children
          }
          <span>{name}</span>
    </a>
  )
}

export default SocialMediaButton
