import styles from "./HowItWorks.module.css";
import SquareLine from "@/shared/ui/components/square-line/SquareLine";
import { HOW_IT_WORKS_STEPS } from "./steps";
import HowItWorksStep from "./components/HowItWorksStep";
import Offer from "../offer/Offer";

export default function HowItWorks() {
    return (
        <section id="how-it-works" className={styles.howItWorks_section}>
            <h4>How It Works</h4>
            <h2>The Easy way to big achievements</h2>
            <SquareLine />
            <div className={styles.howItWorks_section__main}>
                {HOW_IT_WORKS_STEPS.map(({image, label, stepNum, text}) => (
                    <HowItWorksStep key={label} image={image} label={label} stepNum={stepNum} text={text} />
                ))}
            </div>
            <Offer />
        </section>
    );
}
