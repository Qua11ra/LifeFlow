import Card from "@/shared/ui/components/landing_card/Card";
import { FEATURES_CARDS_LIST } from "./cards";
import styles from "./Features.module.css";
import GoUpButton from "@/features/goUp/GoUpButton";
import SquareLine from "@/shared/ui/components/square-line/SquareLine";

export default function Features() {
    return (
        <section id="features" className={styles.features_section}>
            <h4>Features</h4>
            <h2>All, that is needed to achieve the goals</h2>
            <SquareLine />
            <div className={styles.features_section__cards_list}>
                {FEATURES_CARDS_LIST.map(
                    ({ icon, label, text, iconBackgroundColor }) => (
                        <Card iconBackgroundColor={iconBackgroundColor} label={label} text={text} icon={icon} key={label} />
                    ),
                )}
            </div>
            <GoUpButton />
        </section>
    );
}
