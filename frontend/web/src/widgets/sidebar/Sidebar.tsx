import styles from "./Sidebar.module.css";
import SidebarButton from "./components/sidebar-button/SidebarButton";
import { LifeFlowLogo } from "@/shared";
import { SIDEBAR_BUTTONS } from "./sidebar-buttons";
import SwitchThemeIcon from "@/features/switch-theme/SwitchThemeIcon";

export default function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>
                <LifeFlowLogo size="small" />
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
