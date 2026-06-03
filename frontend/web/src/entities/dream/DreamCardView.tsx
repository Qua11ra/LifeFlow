"use client";
import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import DEFAULT_BACKGROUND from "@/../public/images/Landing_AboutApp_Card-background.png";
import { getPercentageOfDream, truncateText } from "@/shared";
import styles from "./DreamCardView.module.css";

export interface IDreamCardVisualProps {
    background?: StaticImageData;
    label: string;
    description: string;
    currentStep: number;
    stepsCount: number;
}

interface IDreamCardViewProps extends IDreamCardVisualProps {
    onClick?: () => void;
    variant?: "mobile" | "desktop";
    className?: { readonly [key: string]: string };
    children?: ReactNode;
}

const LABEL_LENGTH = 35,
    DESCRIPTION_LENGTH = 58;

export default function DreamCardView({
    background,
    label,
    description,
    currentStep,
    stepsCount,
    onClick,
    variant = "mobile",
    className,
    children,
}: IDreamCardViewProps) {
    const PERCENTAGE = getPercentageOfDream(currentStep, stepsCount);
    label = truncateText(label, LABEL_LENGTH);
    description = truncateText(description, DESCRIPTION_LENGTH);

    const classes = [
        styles.card,
        variant === "desktop" && styles.desktop,
        className?.big_card,
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <article
            onClick={onClick}
            aria-labelledby="dream_card_label"
            className={classes}
        >
            <Image
                src={background?.src || DEFAULT_BACKGROUND}
                alt="dream_card_bg"
                className={styles.background}
            />
            <div className={styles.info}>
                <h3 id="dream_card_label">{label}</h3>
                <p className={className?.description}>{description}</p>
                <div className={PERCENTAGE === 100 ? styles.completed : ""}>
                    <div className={styles.progress}>
                        <div
                            className={styles.filled}
                            style={{ width: `${PERCENTAGE}%` }}
                        ></div>
                    </div>
                    <p>{PERCENTAGE}%</p>
                </div>
                <div>
                    <p>
                        {currentStep} of {stepsCount} steps
                    </p>
                    {children}
                </div>
            </div>
        </article>
    );
}
