"use client";
import { useRouter } from "next/navigation";
import { HomeIcon, PlusIcon, PersonIcon, FILL_ICON_COLOR } from "@/shared";
import styles from "./SidebarButton.module.css";

interface SidebarButtonProps {
    icon: "home" | "plus" | "person";
    label: string;
    href?: string;
}

const ICON_MAP = {
    home: HomeIcon,
    plus: PlusIcon,
    person: PersonIcon,
} as const;

export default function SidebarButton({ icon, label, href }: SidebarButtonProps) {
    const router = useRouter();
    const Icon = ICON_MAP[icon];
    const isPlus = icon === "plus";

    const handleClick = () => {
        if (href) router.push(href);
    };

    return (
        <button
            className={`${styles.button} ${isPlus ? styles.plus : styles.ghost}`}
            onClick={handleClick}
            aria-label={label}
            type="button"
        >
            <Icon fill={FILL_ICON_COLOR} size={28} />
        </button>
    );
}
