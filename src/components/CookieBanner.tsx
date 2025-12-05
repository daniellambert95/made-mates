"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function CookieBanner() {
    const { t } = useI18n();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted/dismissed the banner
        const cookieConsent = localStorage.getItem("cookieConsent");
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookieConsent", "accepted");
        setIsVisible(false);
    };

    const handleDismiss = () => {
        localStorage.setItem("cookieConsent", "dismissed");
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-lg shadow-2xl border border-gray-200 p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                            <div className="flex items-start gap-4">
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-primary mb-2">
                                        {t("cookie.title")}
                                    </h3>
                                    <p
                                        className="text-gray-700 text-sm leading-relaxed"
                                        dangerouslySetInnerHTML={{ __html: t("cookie.message") }}
                                    />
                                    <p className="text-gray-600 text-sm mt-2">
                                        {t("cookie.privacy")}{" "}
                                        <Link
                                            href="/privacy"
                                            className="text-secondary hover:underline font-medium"
                                        >
                                            {t("cookie.privacyLink")}
                                        </Link>
                                        .
                                    </p>
                                </div>
                                <button
                                    onClick={handleDismiss}
                                    className="text-gray-400 hover:text-gray-600 transition-colors md:hidden"
                                    aria-label="Close banner"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
                            <button
                                onClick={handleAccept}
                                className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-opacity-90 transition-all font-medium shadow-sm hover:shadow-md"
                            >
                                {t("cookie.accept")}
                            </button>
                            <button
                                onClick={handleDismiss}
                                className="hidden md:block text-gray-500 hover:text-gray-700 transition-colors px-4"
                                aria-label="Close banner"
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
