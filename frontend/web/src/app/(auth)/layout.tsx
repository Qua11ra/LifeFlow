import type { IChildrenProps } from "@/shared";
import styles from "./layout.module.css";

export default function AuthLayout({ children }: IChildrenProps) {
    return <main className={styles.wrapper}>{children}</main>;
}
