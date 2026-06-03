import { Breadcrumbs, type ILink } from "@/shared";
import { Dashboard } from "@/widgets";
import styles from "./page.module.css";

const LINKS: ILink[] = [{ label: "My dreams", to: "/app" }];

export default function AppPage() {
    return (
        <>
            <Breadcrumbs links={LINKS} />
            <div className={styles.title}>
                <h1>Your dreams</h1>
                <p>All your goals in one place</p>
            </div>
            <Dashboard />
        </>
    );
}
