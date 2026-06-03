"use client";
import styles from "./BigDreamCard.module.css";
import type { IDreamCardVisualProps } from "./DreamCardView";
import DreamCardView from "./DreamCardView";

export interface IBigDreamCardProps extends IDreamCardVisualProps {
    id: string;
}

export default function BigDreamCard({ id: _id, ...rest }: IBigDreamCardProps) {
    return <DreamCardView {...rest} className={styles} />;
}
