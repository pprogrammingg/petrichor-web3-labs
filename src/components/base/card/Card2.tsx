import { ReactNode } from 'react'
import styles from './Card2.module.css'

interface CardProps2 {
  children: ReactNode
  description: string
  buttonText: string
  className?: string
}

export const Card2 = ({
  children,
  description,
  buttonText,
  className = '',
}: CardProps2) => {
  return (
    <div className={`${styles['glass-card']} ${className}`}>
      <div className={styles['glass-content']}>
        <div className={styles['glass-description']}>{description}</div>
        <button className={styles['glass-button']}>{buttonText}</button>
      </div>
      <div className={styles['glass-body']}>{children}</div>
    </div>
  )
}
