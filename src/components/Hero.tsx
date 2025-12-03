"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    const { t } = useI18n();

    const scrollToOperations = () => {
        const element = document.getElementById("operations");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden -mt-40">
            {/* Background Image */}
            <div className="absolute inset-0 -top-28 z-0">
                <Image
                    src="/images/made-mates-hero-section.webp"
                    alt="MADE mates Holding Hero"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay - Darker at top, fading to transparent at bottom */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white mt-28">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    {t("hero.tagline")}
                </h1>
                <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
                    {t("hero.intro")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button
                        onClick={scrollToOperations}
                        className="px-8 py-4 bg-secondary hover:bg-blue-600 text-white rounded-full font-semibold transition-all transform hover:scale-105 flex items-center"
                    >
                        {t("hero.cta.explore")}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <button
                        onClick={scrollToContact}
                        className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white rounded-full font-semibold transition-all"
                    >
                        {t("hero.cta.contact")}
                    </button>
                </div>
            </div>
        </section>
    );
}
