'use client'
import { useState } from "react";

type theme = "light" | "dark";

export default function useTheme() {
    const [selectedTheme, setSelectedTheme] = useState<theme>(init());

    function init() {
        if (typeof document !== "undefined") {
            return (
                (document.documentElement.getAttribute(
                    "data-theme",
                ) as theme) || "light"
            );
        }
        return "light";
    }

    function switchTheme() {
        const newTheme: theme = selectedTheme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);

        document.cookie = `theme=${newTheme};path=/;max-age=31536000;SameSite=Lax`;
        setSelectedTheme(newTheme);
    }

    return { switchTheme, selectedTheme };
}
