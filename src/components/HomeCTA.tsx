"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export default function HomeCTA() {
    const { t } = useI18n();

    return (
        <section className="py-24 text-primary" style={{ backgroundColor: '#f5f5f5' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    {t("home.cta.title")}
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                    {t("home.cta.subtitle")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/contact"
                        className="inline-block bg-secondary text-white font-semibold px-10 py-4 rounded-full hover:bg-secondary/90 transition-colors shadow-lg text-lg"
                    >
                        {t("home.cta.contact")}
                    </Link>
                    <Link
                        href="/about"
                        className="inline-block bg-white text-primary border-2 border-primary font-semibold px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-colors shadow-lg text-lg"
                    >
                        {t("home.cta.learn")}
                    </Link>
                </div>
            </div>
        </section>
    );
}
