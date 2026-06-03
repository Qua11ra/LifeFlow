import type { ReactNode } from "react";
export interface ISidebarButton {
    label: string;
    icon: ReactNode;
    href?: string;
    fn?: () => void;
}
