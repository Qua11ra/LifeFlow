import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import "@/shared/styles/reset.css";
import "@/shared/styles/fonts.css";
import "@/shared/styles/variables.css";
import "@/shared/styles/themes.css";
import "@/shared/styles/global.css";
import "@repo/ui/style.css";

export const metadata: Metadata = {
    title: "LifeFlow",
    description: "The road to your dreams",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    const theme = (await cookies()).get("theme")?.value || "light";
    return (
        <html lang="en" data-theme={theme} data-scroll-behavior="smooth">
            <body>{children}</body>
        </html>
    );
}
