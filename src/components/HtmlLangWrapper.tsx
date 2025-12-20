"use client";

import { useEffect } from "react";

export default function HtmlLangWrapper() {
    useEffect(() => {
        // Update HTML lang attribute based on localStorage
        const updateLang = () => {
            const savedLang = localStorage.getItem("language");
            if (savedLang === "de" || savedLang === "en") {
                document.documentElement.lang = savedLang;
            }
        };

        // Initial update
        updateLang();

        // Listen for language changes
        window.addEventListener("languagechange", updateLang);

        return () => {
            window.removeEventListener("languagechange", updateLang);
        };
    }, []);

    return null;
}
