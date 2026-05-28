import type { Metadata } from "next";
import { ReactNode } from "react";
import "./styles/global.css"

export const metadata: Metadata = {
  title: "LifeFlow",
  description: "The road to your dreams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
