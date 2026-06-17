import "./LandingCards.css";
import { type IStaticImageData } from "../../types";
interface ICardProps {
    label: string;
    text: string;
    icon: IStaticImageData | undefined;
    iconBackgroundColor: string;
}

const CARD_LOGO_WIDTH = 45,
    CARD_LOGO_HEIGHT = 45;

export default function LandingCard({
    label,
    icon,
    text,
    iconBackgroundColor,
}: ICardProps) {
    return (
        <div className="landingCard__card">
            <div
                className="landingCard__iconBackground"
                style={{ backgroundColor: iconBackgroundColor }}
            >
                {icon && (
                    <img
                        src={icon.src}
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
