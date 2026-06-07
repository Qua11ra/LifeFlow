"use client";
import styles from "./BigDreamCard.module.css";
import type { IDreamCardVisualProps } from "./DreamCardView";
import DreamCardView from "./DreamCardView";

export interface IBigDreamCardProps extends IDreamCardVisualProps {}

export default function BigDreamCard({ ...rest }: IBigDreamCardProps) {
    return <DreamCardView {...rest} className={styles} />;
}
