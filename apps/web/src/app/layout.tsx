import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import "@/shared/ui/styles/reset.css";
import "@/shared/ui/styles/fonts.css";
import "@/shared/ui/styles/variables.css";
import "@/shared/ui/styles/themes.css";
import "@/shared/ui/styles/global.css";

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
