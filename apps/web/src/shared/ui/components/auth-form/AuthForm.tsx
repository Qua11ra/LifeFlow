import type { FormEventHandler, ReactNode } from "react";
import styles from "./AuthForm.module.css";
import { SwitchThemeIcon } from "@/features";

interface IAuthFormProps {
    title: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    bottomLink: ReactNode;
    children: ReactNode;
}

export default function AuthForm({
    title,
    children,
    onSubmit,
    bottomLink,
}: IAuthFormProps) {
    return (
        <form action={() => console.log("AAAAAAAAAAA")} onSubmit={onSubmit} className={styles.card}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.fields}>{children}</div>
            <div className={styles.bottom}>{bottomLink}</div>
            <SwitchThemeIcon />
        </form>
    );
}
