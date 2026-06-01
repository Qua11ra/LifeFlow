"use client";
import styles from "./SecondaryLayout.module.css";
import NavList from "./components/nav-list/NavList";
import LifeFlowLogo from "@/shared/ui/components/lifeflow-logo/LifeFlowLogo";
import SwitchThemeIcon from "@/features/switch-theme/SwitchThemeIcon";
import { useScrollY } from "@/shared";

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
