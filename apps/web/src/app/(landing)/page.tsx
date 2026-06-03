import { AboutApp, Features, Footer, Hero, HowItWorks } from "@/widgets";
import styles from "./page.module.css";

export default function Landing() {
    return (
        <main className={styles.main}>
            <Hero />
            <AboutApp />
            <Features />
            <HowItWorks />
            <Footer />
        </main>
    );
}
