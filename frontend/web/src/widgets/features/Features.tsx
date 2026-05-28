import Card from "@/shared/ui/components/card/Card";
import { CARDS_LIST } from "./const/cards";
import styles from "./Features.module.css"

export default function Features() {
    return (
        <section id="features" className={styles.features_section}>
            <ul className={styles.cards_list}>

            {CARDS_LIST.map(({icon, label, text, iconBackgroundColor}) => (
                <Card key={label} iconBackgroundColor={iconBackgroundColor} label={label} icon={icon} text={text} />
            ))}
            </ul>
        </section>
    );
};