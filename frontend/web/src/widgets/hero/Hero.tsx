import HeroHeader from "./components/hero-header/HeroHeader";
import HeroMain from "./components/hero-main/HeroMain";
import HeroReviews from "./components/hero-reviews/HeroReviews";
import styles from "./Hero.module.css"

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <HeroHeader />
            <HeroMain />
            <HeroReviews />
        </section>
    );
};