import { MouseEventHandler } from "react"

import styles from './Button.module.css'

interface ButtonProps {
    name: string
    onClick: MouseEventHandler<HTMLButtonElement>
}

const Button = ({name,onClick}:ButtonProps) => {
  return (
    <button
        onClick={onClick}
        className={styles.containerButton}
    >
        {name}
    </button>
  )
}

export default Button