"use client";
import { ErrorFallback, LifeFlowLogo } from "@repo/ui";
import { useRouter } from "next/navigation";
import { SwitchThemeButton } from "@/features";

export default function Error() {
    const router = useRouter();
    return (
        <ErrorFallback
            title="Error, try again :("
            onGoBack={() => router.back()}
            onRefresh={() => router.refresh()}
            logo={
                <LifeFlowLogo
                    src="/icons/LifeFlow-full_logo.png"
                    alt="LifeFlow"
                    width={310}
                    height={80}
                />
            }
            themeSwitcher={<SwitchThemeButton />}
        />
    );
}
