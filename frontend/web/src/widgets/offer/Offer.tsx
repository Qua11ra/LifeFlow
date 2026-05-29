import Button from "@/shared/ui/components/button/Button";
import styles from "./Offer.module.css"

export default function Offer() {
    return (
        <section className={styles.offer_section}>
            <h2>Are you ready to begin your way?</h2>
            <p>Join thousands people, who already converting their dreams to reality with LifeFlow.</p>
            <Button size="medium">
                <p>Begin the road</p>
            </Button>
        </section>
    );
};