import { ReactNode } from "react";

export interface IChildrenProps {
    children: ReactNode
}

export interface ICard {
    icon?: string;
    iconBackgroundColor: string;
    label: string;
    text: string;
}
