import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.css";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactNode;
}

export default function Input({ icon, fn, ...props }: IInputProps) {
    return (
        <div className={styles.background}>
            {icon && (
                <button onClick={fn} className={styles.button}>
                    {icon}
                </button>
            )}
            <input type="text" className={styles.input} {...props} />
        </div>
    );
}
