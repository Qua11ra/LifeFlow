import { SelectHTMLAttributes } from "react";
import styles from "./Select.module.css"
import { Option } from "@/shared";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[]
}

export default function Select({options, ...props}: ISelectProps) {
    return (
        <select className={styles.select}>
            {options.map(({value, label}) => (
                <option value={value} key={value} className={styles.option}>{label}</option>
            ))}
        </select>
    );
};