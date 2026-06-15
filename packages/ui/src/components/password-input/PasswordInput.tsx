"use client";

import {
    type InputHTMLAttributes,
    useState,
} from "react";
import "./PasswordInput.css";
import { VisibilityIcon, VisibilityOffIcon } from "../icons/VisibilityIcon";

interface IPasswordInputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
    error?: string | undefined;
}

export default function PasswordInput({
    error,
    className,
    ...props
}: IPasswordInputProps) {
    const [visible, setVisible] = useState(false);

    return (
        <div className="passwordWrapper">
            <div className={`passwordField${error ? " error" : ""}`}>
                <input
                    type={visible ? "text" : "password"}
                    className="passwordInput"
                    {...props}
                />
                <button
                    type="button"
                    className="visibilityButton"
                    onClick={() => setVisible((v) => !v)}
                    aria-label={visible ? "Hide password" : "Show password"}
                >
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </button>
            </div>
            {error && <p className="errorMessage">{error}</p>}
        </div>
    );
}
