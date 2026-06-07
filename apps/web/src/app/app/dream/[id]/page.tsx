import { BigDreamCard } from "@/entities";
import styles from "./page.module.css";

const TEST_DREAM_CARD = {
    id: "1",
    label: "Go to Japan Go to Japan Go to Japan Go to Japan Go to Japan",
    description:
        "Live in Tokio and work in the world company, Live in Tokio and work in the world company, Live in Tokio and work in the world company",
    currentStep: 7,
    stepsCount: 7,
    isFavorite: true,
};
//TODO delete mock

export default function DreamPage() {
    return (
        <>
            <BigDreamCard {...TEST_DREAM_CARD} />
            <h3 className={styles.title}>Stages on the way to your dream</h3>
        </>
    );
}
