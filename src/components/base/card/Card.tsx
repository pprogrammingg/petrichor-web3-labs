import { ReactNode } from 'react'
import styles from './Card.module.css'

export interface CardProps {
  children: ReactNode
  className?: string
  outerClassName?: string
}

export const Card = ({
  children,
  outerClassName = '',
  className = '',
}: CardProps) => {
  return (
    <div className={`${styles['card-shadow']} ${outerClassName}`}>
      <div className={`${styles['card']} ${className}`}>{children}</div>
    </div>
  )
}
