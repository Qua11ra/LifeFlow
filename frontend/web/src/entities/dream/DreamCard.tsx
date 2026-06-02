"use client";
import Image, { StaticImageData } from "next/image";
import DEFAULT_BACKGROUND from "@/../public/images/Landing_AboutApp_Card-background.png";
import styles from "./DreamCard.module.css";
import KidStarIcon from "@/shared/ui/components/icon/KidStar";
import { ACTIVE_STAR_COLOR, FILL_ICON_COLOR } from "@/shared";
import { useState } from "react";

interface IDreamCardProps {
    background?: StaticImageData;
    label: string;
    description: string;
    currentStep: number;
    stepsCount: number;
    isFavorite: boolean;
}

function getPercentageOfDream(currentStep: number, stepsCount: number) {
    return Math.floor((currentStep / stepsCount) * 100);
}

export default function DreamCard({
    background,
    label,
    description,
    currentStep,
    stepsCount,
    isFavorite: active,
}: IDreamCardProps) {
    const [isFavorite, setFavorite] = useState(active);
    const PERCENTAGE = getPercentageOfDream(currentStep, stepsCount);
    const FILL_COLOR = isFavorite ? ACTIVE_STAR_COLOR : FILL_ICON_COLOR;
    
    function handleSwitchFavorite() {
        setFavorite(prev => !prev)
    }

    return (
        <article
            aria-labelledby="dream_card_label"
            className={styles.dream_card}
        >
            <Image
                src={background?.src || DEFAULT_BACKGROUND}
                alt="dream_card_bg"
                className={styles.background}
            />
            <div className={styles.description}>
                <h3 id="dream_card_label">{label}</h3>
                <p>{description}</p>
                <div>
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
                    <button
                    onClick={handleSwitchFavorite}
                        className={`${styles.favorite_button} ${isFavorite && styles.active}`}
                    >
                        <KidStarIcon fill={FILL_COLOR} />
                    </button>
                </div>
            </div>
        </article>
    );
}
