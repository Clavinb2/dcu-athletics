"use client";

import { useEffect, useState } from "react";

export function ThemeInitializer() {
	return null;
}

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        // Read current state from DOM
        const currentlyDark = document.documentElement.classList.contains("dark");
        setIsDark(currentlyDark);
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        
        const root = document.documentElement;
        if (newDark) {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    if (!mounted) {
        return (
            <button
                aria-label="Toggle dark mode"
                className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
                <span className="hidden sm:inline">Theme mode</span>
                <span aria-hidden>🌓</span>
            </button>
        );
    }

    return (
        <button
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-900/40 dark:text-yellow-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"} mode</span>
            <span aria-hidden>{isDark ? "☀️" : "🌙"}</span>
        </button>
    );
}
