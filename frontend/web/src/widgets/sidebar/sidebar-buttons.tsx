import { HomeIcon, PersonIcon, PlusIcon } from "@/shared";
import { ISidebarButton } from "./types";

export const SIDEBAR_BUTTONS: ISidebarButton[] = [
    { label: "Home", icon: <HomeIcon size={30} />, href: "/app" },
    { label: "Add", icon: <PlusIcon size={30} />, onlyMobile: "mobile" },
    { label: "Profile", icon: <PersonIcon size={30} /> },
];

//TODO add add function