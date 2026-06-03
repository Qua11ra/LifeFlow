"use client";
import { useRouter } from "next/navigation";
import type { ISidebarButton } from "../../types";
import styles from "./SidebarButton.module.css";

export default function SidebarButton({
    icon,
    label,
    href,
    fn,
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
            className={styles.button}
            onClick={handleClick}
            aria-label={label}
            type="button"
        >
            {icon}
        </button>
    );
}
