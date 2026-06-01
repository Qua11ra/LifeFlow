import { IChildrenProps } from "@/shared";
import Sidebar from "@/widgets/sidebar/Sidebar";
import "./page.module.css"

export default function AppLayout({ children }: IChildrenProps) {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
}
