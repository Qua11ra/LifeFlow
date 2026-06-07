"use client";
import { FILL_ICON_COLOR, KidStarIcon } from "@repo/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ACTIVE_STAR_COLOR } from "@/shared";
import styles from "./DreamCard.module.css";
import type { IDreamCardVisualProps } from "./DreamCardView";
import DreamCardView from "./DreamCardView";

export interface IDreamCardProps extends IDreamCardVisualProps {
    id: string;
    isFavorite: boolean;
}

export default function DreamCard({
    id,
    isFavorite,
    ...rest
}: IDreamCardProps) {
    const router = useRouter();
    const [isActiveFavorite, setActiveFavorite] = useState(isFavorite);
    const FILL_COLOR = isActiveFavorite ? ACTIVE_STAR_COLOR : FILL_ICON_COLOR;

    function handleClick() {
        router.push(`/app/dream/${id}`);
    }

    function handleSwitchFavorite(
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) {
        e.stopPropagation();
        setActiveFavorite((prev) => !prev);
    }

    return (
        <DreamCardView
            {...rest}
            variant="desktop"
            onClick={handleClick}
            children={
                <button
                    onClick={handleSwitchFavorite}
                    className={`${styles.favorite_button} ${isActiveFavorite ? styles.active : ""}`}
                >
                    <KidStarIcon fill={FILL_COLOR} />
                </button>
            }
        />
    );
}
