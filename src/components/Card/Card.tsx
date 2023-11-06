import Link from 'next/link';

import style from './Card.module.css'

interface CardProps {
    name:string
    description?:string
    href:string
    children: JSX.Element
}

const Card = ({name,description,children,href}:CardProps) => {
  return (
    <Link
    href={href}
    >
        <div className={style.containerCard}>
            <div className={style.iconContainer}>
                {children}
            </div>
            <span>{name}</span>
            <p>{description}</p>
        </div>
    </Link>
  )
}

export default Card