import { DreamCard } from "@/entities";
import styles from "./Dashboard.module.css"
import { Input, SearchIcon, Select } from "@/shared";
import { CATEGORIES } from "./const";

const TEST_DREAM_CARD = {
    label: "Go to Japan Go to Japan Go to Japan Go to Japan Go to Japan",
    description: "Live in Tokio and work in the world company, Live in Tokio and work in the world company, Live in Tokio and work in the world company",
    currentStep: 5,
    stepsCount: 7,
    isFavorite: true
}

const dream_cards = [
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD,
    TEST_DREAM_CARD
]

//TODO delete mock

export default function Dashboard() {
    return (
        <section className={styles.dashboard}>
            <div className={styles.filters}>
                <Input placeholder="Search" icon={<SearchIcon size={22} />} />
                <Select options={CATEGORIES} />
            </div>
            <div className={styles.dream_cards}>
                {dream_cards.map((card) => (
                    <DreamCard {...card} />
                ))}
            </div>
        </section>
    );
}
