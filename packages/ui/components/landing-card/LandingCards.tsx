import styles from "./LandingCards.module.css";

interface ICardProps {
    label: string;
    text: string;
    iconSrc: string | undefined;
    iconBackgroundColor: string;
}

const CARD_LOGO_WIDTH = 45,
    CARD_LOGO_HEIGHT = 45;

export default function LandingCard({
    label,
    iconSrc,
    text,
    iconBackgroundColor,
}: ICardProps) {
    return (
        <div className={`${styles.card}`}>
            <div
                className={styles.icon_background}
                style={{ backgroundColor: iconBackgroundColor }}
            >
                {iconSrc && (
                    <img
                        src={iconSrc}
                        alt={label}
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
