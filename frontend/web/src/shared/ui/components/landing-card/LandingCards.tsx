import Image from "next/image";
import styles from "./LandingCards.module.css";
import DREAMCARD_EXAMPLE_BACKGROUND from "@/../public/images/Landing_AboutApp_Card-background.png";

interface ICardProps {
    label: string;
    text: string;
    icon?: string | undefined;
    iconBackgroundColor: string;
}

const CARD_LOGO_WIDTH = 45,
    CARD_LOGO_HEIGHT = 45;

const DREAMCARD_EXAMPLE_LABEL = "Move to Japan",
    DREAMCARD_EXAMPLE_PERCENT = 76,
    DREAMCARD_EXAMPLE_CURRENT_STEP = 5,
    DREAMCARD_EXAMPLE_TOTAL_STEP_COUNT = 7;

export default function LandingCard({
    label,
    icon,
    text,
    iconBackgroundColor,
}: ICardProps) {
    return (
        <div className={`${styles.card}`}>
            <div
                className={styles.icon_background}
                style={{ backgroundColor: iconBackgroundColor }}
            >
                {icon && (
                    <Image
                        src={icon}
                        alt="label"
                        width={CARD_LOGO_WIDTH}
                        height={CARD_LOGO_HEIGHT}
                    />
                )}
            </div>
            <h3>{label}</h3>
            <p>{text}</p>
        </div>
    );
}

export function BigLandingCard() {
    return (
        <div className={`${styles.big_card}`}>
            <Image
                src={DREAMCARD_EXAMPLE_BACKGROUND}
                alt=""
                fill
                className={styles.background}
                sizes="(max-width: 768px) 100vw, 45rem"
            />

            <div className={styles.info}>
                <h3 className={styles.label}>{DREAMCARD_EXAMPLE_LABEL}</h3>
                <div>
                    <div className={styles.progress}>
                        <div className={styles.line}>
                            <div className={styles.line_filled}></div>
                        </div>
                        <p>{DREAMCARD_EXAMPLE_PERCENT}%</p>
                    </div>
                    <p className={styles.description}>
                        {DREAMCARD_EXAMPLE_CURRENT_STEP} of {DREAMCARD_EXAMPLE_TOTAL_STEP_COUNT} steps completed
                    </p>
                </div>
            </div>
        </div>
    );
}