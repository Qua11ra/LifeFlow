import { DreamCard } from "@/entities";
import styles from "./Dashboard.module.css"



const TEST_DREAM_CARD = {
    label: "Go to Japan",
    description: "Live in Tokio and work in the world company",
    currentStep: 5,
    stepsCount: 7,
    isFavorite: true
}


export default function Dashboard() {
    return (
        <section className={styles.dashboard}>
            <div className={styles.filters}>
                <input
                    type="text"
                    className="px-2 border rounded-sm"
                    placeholder="Search"
                />
                <label htmlFor="dream-filter">
                    <select
                        name="dream-filter"
                        id="dream-filter"
                        className="border rounded-sm p-2 cursor-pointer"
                    >
                        <option value="all">All dreams</option>
                        <option value="favorites">Favorites</option>
                        <option value="nevest">Newest</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </label>
            </div>
            <div className={styles.dream_cards}>
                <DreamCard {...TEST_DREAM_CARD} />
            </div>
        </section>
    );
}
