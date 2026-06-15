import {
    type InputHTMLAttributes,
    type ReactNode,
} from "react";
import "./Input.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string | undefined;
    icon?: ReactNode;
    onIconClick?: () => void;
}

export default function Input({ icon, onIconClick, error, ...props }: IInputProps) {
    return (
        <div className={`wrapper${error ? " error" : ""}`}>
            <div className={`input__background ${error ? "error" : ""}`}>
                {icon && (
                    <button onClick={onIconClick} className="input__button" type="button">
                        {icon}
                    </button>
                )}
                <input className="input__input" {...props} />
            </div>
            {error && <p className="error">{error}</p>}
        </div>
    );
}
