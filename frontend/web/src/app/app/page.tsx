import { Dashboard } from "@/widgets";
import styles from "./page.module.css";

export default function AppPage() {
    return (
        <main className={styles.main}>
            <div className={styles.title}>
                <h1>Your dreams</h1>
                <p>All your goals in one place</p>
            </div>
            <Dashboard />
        </main>
    );
}
