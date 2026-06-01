interface ISidebarButton {
    label: string;
    icon: "home" | "plus" | "person";
    href?: string;
    fn?: () => void;
}

export const SIDEBAR_BUTTONS: ISidebarButton[] = [
    { label: "Home", icon: "home", href: "/app" },
    { label: "Add", icon: "plus" },
    { label: "Profile", icon: "person" },
];

export type { ISidebarButton };
