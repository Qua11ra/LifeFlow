import Hero from "@/widgets/hero/Hero";
import styles from "./page.module.css";
import Features from "@/widgets/features/Features";
import HowItWorks from "@/widgets/how-it-works/HowItWorks";
import FAQ from "@/widgets/faq/FAQ";
import Footer from "@/widgets/footer/Footer";
import LandingBackground from "@/shared/ui/components/landing-background/LandingBackground";

export default function Landing() {
    return (
        <div className={`${styles.main}`}>
            <LandingBackground />
            <div className={styles.background}></div>
            <Hero />
            <Features />
            <HowItWorks />
            <FAQ />
            <Footer />
        </div>
    );
};