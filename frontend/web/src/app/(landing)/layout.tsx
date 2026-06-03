import type { IChildrenProps } from "@/shared";
import SecondaryLayout from "@/widgets/layouts/SecondaryLayout";

export default function LandingLayout({ children }: IChildrenProps) {
    return (
        <>
            <SecondaryLayout />
            {children}
        </>
    );
}
