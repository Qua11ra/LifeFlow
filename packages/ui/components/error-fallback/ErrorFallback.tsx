import type { ReactNode } from "react";
import "./ErrorFallback.css";

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
        <main className="errorFallback__section">
            {logo}
            <section className="errorFallback__info">
                <h1>{title}</h1>
                <div className="errorFallback__buttons">
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
