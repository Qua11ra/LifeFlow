import { NAV_LIST } from "./navList";
import styles from "./NavList.module.css";

export default function NavList() {
    return (
        <nav className={styles.nav_list}>
            {NAV_LIST.map(({ label, to }) => (
                <a key={label} href={to}>
                    {label}
                </a>
            ))}
        </nav>
    );
}
