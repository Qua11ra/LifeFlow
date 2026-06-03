"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "small" | "medium" | "large";
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    size = "small",
    type = "button",
    className,
    disabled,
    onClick,
    ...restProps
}: IButtonProps) {
    return (
        <button
            data-size={size}
            type={type}
            className={`${styles.button} ${styles[size]} ${variant === "outline" ? styles.outline : ""} ${className || ""}`}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </button>
    );
}
