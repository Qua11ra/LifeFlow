import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export type Option = {
    value: string;
    label: string;
};

export interface IChildrenProps {
    children: ReactNode;
}

export interface ICard {
    icon?: StaticImageData;
    iconBackgroundColor: string;
    label: string;
    text: string;
}

export interface ILink {
    label: string;
    to: string;
}
