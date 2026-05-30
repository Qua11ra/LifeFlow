import Image from "next/image";
import styles from "./Card.module.css"

interface ICardProps {
    label: string,
    text: string,
    icon?: string | undefined,
    iconBackgroundColor: string
}

const CARD_LOGO_WIDTH = 45, CARD_LOGO_HEIGHT = 45

export default function Card({label, icon, text, iconBackgroundColor}: ICardProps) {
    return (
        <div className={`${styles.card}`}>
            <div className={styles.icon_background} style={{backgroundColor: iconBackgroundColor}}>
                {icon && <Image src={icon} alt="label" width={CARD_LOGO_WIDTH} height={CARD_LOGO_HEIGHT} />}
            </div>
            <h3>{label}</h3>
            <p>{text}</p>
        </div>
    );
};