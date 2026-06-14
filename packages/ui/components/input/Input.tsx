import type { InputHTMLAttributes, ReactNode } from "react";
import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    icon?: ReactNode;
    fn?: () => void;
}

export default function Input({ icon, fn, error, ...props }: IInputProps) {
    return (
        <div className={`wrapper${error ? " error" : ""}`}>
            <div className={`input__background ${error ? "error" : ""}`}>
                {icon && (
                    <button onClick={fn} className="input__button">
                        {icon}
                    </button>
                )}
                <input className="input__input" {...props} />
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}
