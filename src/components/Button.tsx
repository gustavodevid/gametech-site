import { type ButtonHTMLAttributes, forwardRef } from "react"
import styles from "../styles/Button.module.css"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
  fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", fullWidth, children, ...props }, ref) => {
    return (
      <button
        className={`${styles.button} ${styles[variant]} ${size === "sm" ? styles.sm : ""} ${
          size === "lg" ? styles.lg : ""
        } ${size === "icon" ? styles.icon : ""} ${fullWidth ? styles.fullWidth : ""} ${className || ""}`}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }
