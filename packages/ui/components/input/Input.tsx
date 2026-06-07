import type { InputHTMLAttributes, ReactNode } from "react";
import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
    fn?: () => void;
}

export default function Input({ icon, fn, ...props }: IInputProps) {
    return (
        <div className="input__background">
            {icon && (
                <button onClick={fn} className="input__button">
                    {icon}
                </button>
            )}
            <input type="text" className="input__input" {...props} />
        </div>
    );
}
