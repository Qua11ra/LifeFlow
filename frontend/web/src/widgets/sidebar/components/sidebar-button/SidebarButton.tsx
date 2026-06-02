"use client";
import { useRouter } from "next/navigation";
import styles from "./SidebarButton.module.css";
import { ISidebarButton } from "../../types";

export default function SidebarButton({
    icon,
    label,
    href,
    fn,
    onlyMobile = '',
}: ISidebarButton) {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
            return;
        }

        if (fn) fn();
    };

    return (
        <button
            className={`${styles.button} ${styles[onlyMobile]}`}
            onClick={handleClick}
            aria-label={label}
            type="button"
        >
            {icon}
        </button>
    );
}
