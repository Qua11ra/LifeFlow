import styles from "./AboutApp.module.css";
import GoUpButton from "@/features/goUp/GoUpButton";
import SquareLine from "@/shared/ui/components/square-line/SquareLine";
import { BigLandingCard } from "@/shared/ui/components/landing-card/LandingCards";



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
                <BigLandingCard />
            </div>
            <GoUpButton />
        </section>
    );
}
