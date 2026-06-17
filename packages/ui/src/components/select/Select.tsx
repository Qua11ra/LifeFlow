import type { SelectHTMLAttributes } from "react";
import type { Option } from "../../types";
import "./Select.css";

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    options: Option[];
}

export default function Select({ options, ...props }: ISelectProps) {
    return (
        <select className="select__select" {...props}>
            {options.map(({ value, label }) => (
                <option value={value} key={value} className="select__option">
                    {label}
                </option>
            ))}
        </select>
    );
}
