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
                className={styles.background}
            />

            <div className={styles.info}>
                <p className={styles.label}>{label}</p>
                <div>
                    <div className={styles.progress}>
                        <div className={styles.line}>
                            <div
                                className={
                                    styles.line_filled
                                }
                            ></div>
                        </div>
                        <p>{percent}%</p>
                    </div>
                    <p className={styles.description}>
                        {currentStep} of {totalStepCount} steps completed
                    </p>
                </div>
            </div>
        </div>
    );
}
