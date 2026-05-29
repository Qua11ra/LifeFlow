import Card from "@/shared/ui/components/card/Card";
import styles from "./HowItWorks.module.css"
import { HOW_IT_WORKS_CARDS_LIST } from "./cards";

export default function HowItWorks() {
    return (
        <section className={styles.howItWorks_section}>
            <h2>How It works</h2>
            {HOW_IT_WORKS_CARDS_LIST.map(({label, iconBackgroundColor, text, icon}) => (
                <Card key={label} label={label} icon={icon} iconBackgroundColor={iconBackgroundColor} text={text} />
            ))}
        </section>
    );
};