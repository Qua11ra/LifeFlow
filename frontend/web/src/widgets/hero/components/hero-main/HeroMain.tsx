import styles from "./Heromain.module.css";
import GoToUpButton from "@/features/goToApp/GoToAppButton";

export default function HeroMain() {
    return (
        <div className={styles.hero_main}>
            <h1>Make your dreams into the really way</h1>
            <p>
                LifeFlow helps you to split a big goals into steps and actions.
                Step every day and complete the imposible
            </p>
            {/*//TODO write a normal description like maket*/}
            <GoToUpButton />
        </div>
    );
}
