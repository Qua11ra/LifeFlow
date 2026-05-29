import manIcon from "@/../public/images/man.png"
import womanIcon from "@/../public/images/woman.png"
import pandaIcon from "@/../public/images/panda.png"
import starRatingIcon from "@/../public/icons/star_rating-icon.svg"
import Image from "next/image";
import styles from "./HeroReviews.module.css"

const ICONS = [manIcon, womanIcon, pandaIcon]
const LOGO_WIDTH = 50, LOGO_HEIGHT = 50, STARS_COUNT = 5, STAR_LOGO_WIDTH = 25, STAR_LOGO_HEIGHT = 25;

export default function HeroReviews() {
    return (
        <div className={styles.reviews}>
            <div className={styles.reviews_icons}>
                {ICONS.map(icon => (
                    <Image src={icon} alt="logo" width={LOGO_WIDTH} height={LOGO_HEIGHT} />
                ))}
            </div>
            <div className={styles.reviews_description}>
                <div>
                    {[...Array(STARS_COUNT)].map((_, idx) => (
                        <Image key={idx} src={starRatingIcon} alt="star-rating-icon" width={STAR_LOGO_WIDTH} height={STAR_LOGO_HEIGHT} />
                    ))}
                </div>
                <p>Over 1000 users yet build the way to their dreams</p>
            </div>
        </div>
    );
};