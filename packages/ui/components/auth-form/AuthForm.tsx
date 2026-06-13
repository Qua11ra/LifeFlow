import type { FormEventHandler, ReactNode } from "react";
import "./AuthForm.css";

interface IAuthFormProps {
    title: string;
    onSubmit: FormEventHandler<HTMLFormElement>;
    bottomLink: ReactNode;
    children: ReactNode;
    step: number;
    stepsCount: number;
}

export default function AuthForm({
    title,
    children,
    onSubmit,
    bottomLink,
    step,
    stepsCount
}: IAuthFormProps) {
    const FILL_PERCENT = Math.floor(((step - 1) / stepsCount) * 100);
    
    return (
        <>
            <form onSubmit={onSubmit} className="authForm__card">
                <h2 className="authForm__title">{title}</h2>
                <div className="authForm__fields">{children}</div>
                <div className="authForm__bottom">{bottomLink}</div>
            </form>
            <div className="progress_bar">
                <div className="filled" style={{transform: `translateX(${FILL_PERCENT}%)`}}></div>
            </div>
        </>
    );
}
