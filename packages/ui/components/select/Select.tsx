import type { SelectHTMLAttributes } from "react";
import type { Option } from "../../types";
import styles from "./Select.module.css";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

export default function Select({ options, ...props }: ISelectProps) {
    return (
        <select className={styles.select} {...props}>
            {options.map(({ value, label }) => (
                <option value={value} key={value} className={styles.option}>
                    {label}
                </option>
            ))}
        </select>
    );
}
