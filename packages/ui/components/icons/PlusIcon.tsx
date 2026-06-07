import { FILL_ICON_COLOR } from "@/consts";
import type { IIconProps } from "@/types";

export default function PlusIcon({
    fill = FILL_ICON_COLOR,
    size = 24,
}: IIconProps) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={size}
            viewBox="0 -960 960 960"
            width={size}
            fill={fill}
        >
            <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
        </svg>
    );
}
