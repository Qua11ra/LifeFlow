import type { FormEventHandler, ReactNode } from "react";
import "./AuthForm.css";

interface IAuthFormProps {
    title: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    bottomLink: ReactNode;
    children: ReactNode;
    themeSwitcher?: ReactNode;
}

export default function AuthForm({
    title,
    children,
    onSubmit,
    bottomLink,
    themeSwitcher,
}: IAuthFormProps) {
    return (
        <form
            onSubmit={onSubmit}
            className="authForm__card"
        >
            <h2 className="authForm__title">{title}</h2>
            <div className="authForm__fields">{children}</div>
            <div className="authForm__bottom">{bottomLink}</div>
            {themeSwitcher}
        </form>
    );
}
