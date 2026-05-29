import DreamCard from "@/shared/ui/components/dream_card/DreamCard";
import styles from "./AboutApp.module.css"
import DREAMCARD_EXAMPLE_BACKGROUND from "@/../public/images/Landing_AboutApp_Card-background.png"
import GoUpButton from "@/features/goUp/GoUpButton";
import SquareLine from "@/shared/ui/components/square-line/SquareLine";

const DREAMCARD_EXAMPLE_LABEL = "Move to Japan", DREAMCARD_EXAMPLE_PERCENT = 76, DREAMCARD_EXAMPLE_CURRENT_STEP = 5, DREAMCARD_EXAMPLE_TOTAL_STEP_COUNT = 7

//TODO write a normal description

export default function AboutApp() {
    return (
        <section id="about-app" className={styles.aboutApp_section}>
            <h4>About app</h4>
            <h2>Your travel to the dream</h2>
            <SquareLine />
            <div className={styles.aboutApp_section__main}>
                <div>
                    <p>LifeFlow is your private compass on the way to the big goals. We help to transform the abstract dreams to steps and actions</p>
                    <p>Split your goals to the stages, complete actions, check progress and move to your dream confidently and consciously</p>
                </div>
                <DreamCard background={DREAMCARD_EXAMPLE_BACKGROUND} label={DREAMCARD_EXAMPLE_LABEL} currentStep={DREAMCARD_EXAMPLE_CURRENT_STEP} totalStepCount={DREAMCARD_EXAMPLE_TOTAL_STEP_COUNT} percent={DREAMCARD_EXAMPLE_PERCENT} />
            </div>
            <GoUpButton />
        </section>
    );
};