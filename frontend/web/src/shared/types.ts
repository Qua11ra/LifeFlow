import { ReactNode } from "react";

export type Option = {
    value: string,
    label: string
}

export interface IChildrenProps {
    children: ReactNode
}

export interface ICard {
    icon?: string;
    iconBackgroundColor: string;
    label: string;
    text: string;
}

export interface IIconProps {
    fill?: string;
    size?: number;
}