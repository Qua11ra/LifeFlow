import { IChildrenProps } from "@/shared";
import SecondaryLayout from "@/widgets/layout/SecondaryLayout";

export default function LandingLayout({ children }: IChildrenProps) {
    return (
        <>
            <SecondaryLayout />
            {children}
        </>
    );
}
