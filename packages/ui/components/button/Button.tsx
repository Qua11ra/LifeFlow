"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import "./Button.css";

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
            type={type}
            className={`button ${size} ${variant === "outline" ? "outline" : ""}`}
            onClick={onClick}
            {...restProps}
        >
            {children}
        </button>
    );
}
