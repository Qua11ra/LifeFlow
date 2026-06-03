"use client";
import { useRouter } from "next/navigation";
import { SwitchThemeIcon } from "@/features";
import { Button, LifeFlowLogo } from "@/shared/";
import styles from "./ErrorFallback.module.css";

interface ErrorFallbackProps {
    title: string;
}

export default function ErrorFallback({ title }: ErrorFallbackProps) {
    const router = useRouter();

    return (
        <main className={styles.not_found_section}>
            <LifeFlowLogo width={310} heigth={80} />
            <section className={styles.info}>
                <h1>{title}</h1>
                <div className={styles.buttons}>
                    <Button onClick={() => router.back()}>Go back</Button>
                    <Button onClick={() => router.refresh()}>
                        Refresh page
                    </Button>
                </div>
                <SwitchThemeIcon />
            </section>
        </main>
    );
}
