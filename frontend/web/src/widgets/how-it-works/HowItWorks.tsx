import styles from "./HowItWorks.module.css";
import SquareLine from "@/shared/ui/square-line/SquareLine";
import { HOW_IT_WORKS_STEPS } from "./steps";
import HowItWorksStep from "./components/HowItWorksStep";
import Button from "@/shared/ui/button/Button";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.howItWorks_section}>
            <h4>How It Works</h4>
            <h2>The Easy way to big achievements</h2>
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
                <Button size="medium">
                    Begin the road
                </Button>
            </div>
        </section>
    );
}
