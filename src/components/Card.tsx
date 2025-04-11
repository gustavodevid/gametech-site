import { type HTMLAttributes, forwardRef } from "react"
import styles from "../styles/Card.module.css"

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.card} ${className || ""}`} {...props} />
))
Card.displayName = "Card"

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.cardContent} ${className || ""}`} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }
