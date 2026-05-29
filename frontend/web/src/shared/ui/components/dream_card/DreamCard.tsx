import Image, { StaticImageData } from "next/image";
import styles from "./DreamCard.module.css";

interface IDreamCardProps {
    label: string;
    background: StaticImageData;
    percent: number;
    currentStep: number;
    totalStepCount: number;
}

export default function DreamCard({
    label,
    background,
    percent,
    currentStep,
    totalStepCount,
}: IDreamCardProps) {
    return (
        <div className={styles.card}>
            <Image
                src={background}
                alt="card"
                className={styles.card__background}
            />

            <div className={styles.card__info}>
                <p className={styles.card__info__label}>{label}</p>
                <div>
                    <div className={styles.card__info__progress}>
                        <div className={styles.card__info__progress__line}>
                            <div
                                className={
                                    styles.card__info__progress__line_filled
                                }
                            ></div>
                        </div>
                        <p>{percent}%</p>
                    </div>
                    <p className={styles.card__info__description}>
                        {currentStep} of {totalStepCount} steps completed
                    </p>
                </div>
            </div>
        </div>
    );
}
