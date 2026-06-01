"use client";
import { Button, LifeFlowLogo } from "@/shared/";
import SwitchThemeIcon from "@/features/switch-theme/SwitchThemeIcon";
import styles from "./ErrorFallback.module.css";

interface ErrorFallbackProps {
    title: string;
}

export default function ErrorFallback({ title }: ErrorFallbackProps) {
    return (
        <main className={styles.not_found_section}>
            <LifeFlowLogo width={310} heigth={80} />
            <section className={styles.info}>
                <h1>{title}</h1>
                <Button>
                    <a href="/">Go back</a>
                </Button>
                <SwitchThemeIcon />
            </section>
        </main>
    );
}
