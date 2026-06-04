import { LifeFlowLogo } from "@repo/ui";
import { SwitchThemeIcon } from "@/features";
import SidebarButton from "./components/sidebar-button/SidebarButton";
import styles from "./Sidebar.module.css";
import { SIDEBAR_BUTTONS } from "./sidebar-buttons";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <LifeFlowLogo
                    src="/icons/LifeFlow-logo.png"
                    alt="LifeFlow"
                    size="small"
                />
            </div>
            <nav className={styles.nav}>
                {SIDEBAR_BUTTONS.map((btn) => (
                    <SidebarButton key={btn.label} {...btn} />
                ))}
            </nav>
            <SwitchThemeIcon />
        </aside>
    );
}
