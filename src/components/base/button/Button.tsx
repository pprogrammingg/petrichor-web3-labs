import React, { ReactNode, MouseEvent } from 'react'
import styles from './button.module.css'

interface ButtonProps {
  children: ReactNode
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  className?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  className = '',
}) => {
  const handleOnClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled || !onClick) return
    onClick(event)
  }

  const classes = `${styles.button} ${className}`

  return (
    <button disabled={disabled} className={classes} onClick={handleOnClick}>
      {children}
    </button>
  )
}
