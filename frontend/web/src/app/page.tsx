import Hero from "@/widgets/hero/Hero";
import styles from "./page.module.css";
import Features from "@/widgets/features/Features";
import HowItWorks from "@/widgets/how-it-works/HowItWorks";
import Footer from "@/widgets/footer/Footer";
import AboutApp from "@/widgets/about-app/AboutApp";

export default function Landing() {
    return (
        <div className={styles.main}>
            <Hero />
            <AboutApp />
            <Features />
            <HowItWorks />
            <Footer />
        </div>
    );
};