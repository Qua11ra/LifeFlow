import Button from "@/shared/ui/components/button/Button";
import styles from "./Heromain.module.css"

export default function HeroMain() {
    return (
        <section className={styles.hero_main}>
            <h1>Make your dreams into the really way</h1>
            <p>
                LifeFlow helps you to split a big goals into steps and actions.
                Step every day and complete the imposible
            </p>
            {/*//TODO write a normal description like maket*/}
            <Button size="medium">
                <p>Begin the road</p>
            </Button>
        </section>
    );
}
