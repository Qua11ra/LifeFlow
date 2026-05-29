import Card from "@/shared/ui/components/card/Card";
import { FEATURES_CARDS_LIST } from "./cards";
import styles from "./Features.module.css";
import GoUpButton from "@/features/goUp/GoUpButton";

export default function Features() {
    return (
        <section id="features" className={styles.features_section}>
            <h2>Features</h2>
            <ul className={styles.cards_list}>
                {FEATURES_CARDS_LIST.map(
                    ({ icon, label, text, iconBackgroundColor }) => (
                        <Card
                            key={label}
                            iconBackgroundColor={iconBackgroundColor}
                            label={label}
                            icon={icon}
                            text={text}
                        />
                    ),
                )}
            </ul>
            <GoUpButton />
        </section>
    );
}
