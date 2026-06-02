"use client";
import { useRouter } from "next/navigation";
import styles from "./SidebarButton.module.css";
import { ISidebarButton } from "../../types";

export default function SidebarButton({
    icon,
    label,
    href,
    fn
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
