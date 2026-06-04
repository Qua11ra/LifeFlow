import { SquareLine } from "@repo/ui";
import { BigDreamCard } from "@/entities";
import { GoUpButton } from "@/features";
import styles from "./AboutApp.module.css";

const LANDING_DREAM_CARD_PROPS = {
    id: "1",
    label: "Go to Japan",
    description: "Earn a money and learn japanese",
    currentStep: 5,
    stepsCount: 7,
    isFavorite: true,
};

//TODO write a normal description

export default function AboutApp() {
    return (
        <section id="about-app" className={styles.aboutApp_section}>
            <h2>About app</h2>
            <h3>Your travel to the dream</h3>
            <SquareLine />
            <div className={styles.main}>
                <div>
                    <p>
                        LifeFlow is your private compass on the way to the big
                        goals. We help to transform the abstract dreams to steps
                        and actions
                    </p>
                    <p>
                        Split your goals to the stages, complete actions, check
                        progress and move to your dream confidently and
                        consciously
                    </p>
                </div>
                <BigDreamCard {...LANDING_DREAM_CARD_PROPS} />
            </div>
            <GoUpButton />
        </section>
    );
}
