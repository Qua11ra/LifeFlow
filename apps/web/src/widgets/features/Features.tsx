import { LandingCard, SquareLine } from "@repo/ui";
import { GoUpButton } from "@/features";
import { FEATURES_CARDS_LIST } from "./cards";
import styles from "./Features.module.css";

export default function Features() {
    return (
        <section id="features" className={styles.features_section}>
            <h2>Features</h2>
            <h3>All, that is needed to achieve the goals</h3>
            <SquareLine />
            <div className={styles.cards_list}>
                {FEATURES_CARDS_LIST.map(
                    ({ icon, label, text, iconBackgroundColor }) => (
                        <LandingCard
                            iconBackgroundColor={iconBackgroundColor}
                            label={label}
                            text={text}
                            iconSrc={icon}
                            key={label}
                        />
                    ),
                )}
            </div>
            <GoUpButton />
        </section>
    );
}
