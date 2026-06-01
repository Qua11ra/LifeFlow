import { Hero, AboutApp, Features, HowItWorks, Footer } from "@/widgets";
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
