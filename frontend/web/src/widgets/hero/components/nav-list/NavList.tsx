import { NAV_LIST } from "./const/navList";
import styles from "./NavList.module.css"

export default function NavList() {
    return (
        <nav className={styles.nav_list}>
            {NAV_LIST.map(({ label, to }) => (
                <li key={label}>
                    <a href={to}>
                        {label}
                    </a>
                </li>
            ))}
        </nav>
    );
}
