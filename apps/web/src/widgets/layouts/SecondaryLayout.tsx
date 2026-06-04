"use client";
import { LifeFlowLogo } from "@repo/ui";
import { SwitchThemeIcon } from "@/features";
import { useScrollY } from "@/shared";
import NavList from "./components/nav-list/NavList";
import styles from "./SecondaryLayout.module.css";

export default function SecondaryLayout() {
    const scrollY = useScrollY();
    const isAtTop = scrollY < 100;

    return (
        <header
            className={`${styles.hero_header} ${isAtTop ? styles.at_top : ""}`}
        >
            <div className={styles.collapsed}>
                <LifeFlowLogo
                    src="/icons/LifeFlow-full_logo.png"
                    alt="LifeFlow"
                />
                <NavList />
                <SwitchThemeIcon />
            </div>
        </header>
    );
}
