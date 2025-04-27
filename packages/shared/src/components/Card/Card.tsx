import React from 'react'
import styles from './Card.module.css'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  elevation?: number
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  elevation = 1,
  className,
  ...props 
}) => {
  return (
    <div 
      className={`${styles.card} ${styles[`elevation${elevation}`]} ${className || ''}`}
      {...props}
    >
      {children}
    </div>
  )
} 