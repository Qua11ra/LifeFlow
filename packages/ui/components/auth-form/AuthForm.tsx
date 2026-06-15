import type { FormEventHandler, ReactNode, Ref } from "react";
import "./AuthForm.css";

interface IAuthFormProps {
    title: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    bottomLink: ReactNode;
    children: ReactNode;
    progress: number;
    ref?: Ref<HTMLFormElement>;
}

export default function AuthForm({
    title,
    children,
    onSubmit,
    bottomLink,
    progress,
    ref
}: IAuthFormProps) {
    return (
        <>
            <form ref={ref} onSubmit={onSubmit} className="authForm__card">
                <h2 className="authForm__title">{title}</h2>
                <div className="authForm__fields">{children}</div>
                <div className="authForm__bottom">{bottomLink}</div>
            </form>
            <div className="progress_bar">
                <div
                    className="filled"
                    style={{ transform: `translateX(${progress}%)` }}
                />
            </div>
        </>
    );
}
