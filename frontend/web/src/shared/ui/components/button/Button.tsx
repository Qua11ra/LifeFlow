'use client'
import { ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css"

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
    variant?: "primary" | "secondary" | "outline",
    size?: "small" | "medium" | "large",
    onClick?: () => void
}

export default function Button({children, variant = "primary", size = 'small', type = 'button', className, disabled, onClick, ...restProps }: IButtonProps) {
    return (
        <button type={type} className={`${styles.button} ${styles[size]} ${className || ""}`} onClick={onClick} {...restProps}>{children}</button>
    );
};