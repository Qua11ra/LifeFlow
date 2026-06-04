import type { ReactNode } from "react";
import styles from "./ErrorFallback.module.css";

interface ErrorFallbackProps {
    title: string;
    onGoBack?: () => void;
    onRefresh?: () => void;
    themeSwitcher?: ReactNode;
    logo?: ReactNode;
    goBackLabel?: string;
    refreshLabel?: string;
}

export default function ErrorFallback({
    title,
    onGoBack,
    onRefresh,
    themeSwitcher,
    logo,
    goBackLabel = "Go back",
    refreshLabel = "Refresh page",
}: ErrorFallbackProps) {
    return (
        <main className={styles.not_found_section}>
            {logo}
            <section className={styles.info}>
                <h1>{title}</h1>
                <div className={styles.buttons}>
                    {onGoBack && (
                        <button type="button" onClick={onGoBack}>
                            {goBackLabel}
                        </button>
                    )}
                    {onRefresh && (
                        <button type="button" onClick={onRefresh}>
                            {refreshLabel}
                        </button>
                    )}
                </div>
                {themeSwitcher}
            </section>
        </main>
    );
}
