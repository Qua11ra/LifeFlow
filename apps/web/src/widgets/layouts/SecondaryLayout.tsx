"use client";
import { SwitchThemeIcon } from "@/features";
import { useScrollY } from "@/shared";
import LifeFlowLogo from "@/shared/ui/components/lifeflow-logo/LifeFlowLogo";
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
                <LifeFlowLogo />
                <NavList />
                <SwitchThemeIcon />
            </div>
        </header>
    );
}
