import { ReactNode } from 'react'
import styles from './Card.module.css'

export const Card = ({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
  outerClassName?: string
}) => {
  return (
      <div className={`${styles['card']} ${styles[className]}`}>{children}</div>
  )
}
