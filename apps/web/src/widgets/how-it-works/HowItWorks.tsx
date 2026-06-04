import { SquareLine } from "@repo/ui";
import { GoToUpButton } from "@/features";
import HowItWorksStep from "./components/HowItWorksStep";
import styles from "./HowItWorks.module.css";
import { HOW_IT_WORKS_STEPS } from "./steps";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.howItWorks_section}>
            <h2>How It Works</h2>
            <h3>The Easy way to big achievements</h3>
            <SquareLine />
            <div className={styles.main}>
                {HOW_IT_WORKS_STEPS.map(({ image, label, stepNum, text }) => (
                    <HowItWorksStep
                        key={label}
                        image={image}
                        label={label}
                        stepNum={stepNum}
                        text={text}
                    />
                ))}
            </div>
            <div className={styles.offer_section}>
                <h2>Are you ready to begin your way?</h2>
                <p>
                    Join thousands people, who already converting their dreams
                    to reality with LifeFlow.
                </p>
                <GoToUpButton />
            </div>
        </section>
    );
}
