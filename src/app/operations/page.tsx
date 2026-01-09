"use client";

import { useI18n } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OperationsPage() {
    const { t } = useI18n();

    const operations = [
        {
            id: "fashion",
            title: "MADE mates Fashion GmbH",
            logo: "/images/logos/brand-logos/fashion-logo.webp",
            image: "/images/logos/brand-logos/fashion-logo.webp",
            descKey: "ops.fashion.desc",
            subtitleKey: "ops.fashion.subtitle",
            fullKey: "ops.fashion.full",
        },
        {
            id: "healthcare",
            title: "MADE mates Healthcare GmbH",
            logo: "/images/logos/brand-logos/healthcare-logo.webp",
            image: "/images/logos/brand-logos/healthcare-logo.webp",
            descKey: "ops.healthcare.desc",
            subtitleKey: "ops.healthcare.subtitle",
            fullKey: "ops.healthcare.full",
        },
        {
            id: "toys",
            title: "MADE mates Toys GmbH",
            logo: "/images/logos/brand-logos/toys-logo.webp",
            image: "/images/logos/brand-logos/toys-logo.webp",
            descKey: "ops.toys.desc",
            subtitleKey: "ops.toys.subtitle",
            fullKey: "ops.toys.full",
        },
        {
            id: "petstep",
            title: "MADE mates Petstep GmbH",
            logo: "/images/logos/brand-logos/petstep-logo.webp",
            image: "/images/logos/brand-logos/petstep-logo.webp",
            descKey: "ops.petstep.desc",
            subtitleKey: "ops.petstep.subtitle",
            fullKey: "ops.petstep.full",
        },
        {
            id: "must",
            title: "MADE mates MUST GmbH",
            logo: "/images/logos/brand-logos/must-logo.webp",
            image: "/images/logos/brand-logos/must-logo.webp",
            descKey: "ops.must.desc",
            subtitleKey: "ops.must.subtitle",
            fullKey: "ops.must.full",
        },
        {
            id: "power",
            title: "MADE mates Power GmbH",
            logo: "/images/logos/brand-logos/power-logo.webp",
            image: "/images/logos/brand-logos/power-logo.webp",
            descKey: "ops.power.desc",
            subtitleKey: "ops.power.subtitle",
            fullKey: "ops.power.full",
        },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/80"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {t("ops.page.title")}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        {t("ops.page.subtitle")}
                    </p>
                </div>
            </section>

            {/* Operations Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-24">
                        {operations.map((operation, index) => (
                            <div
                                key={operation.id}
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Image/Logo Side */}
                                <div
                                    className={`${index % 2 === 1 ? "lg:order-2" : ""}`}
                                >
                                    <div
                                        className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                                        style={{ backgroundColor: "#f5f5f5" }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center p-12">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={operation.logo}
                                                    alt={operation.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div
                                    className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}
                                >
                                    <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                        {operation.title}
                                    </h2>
                                    <div className="w-20 h-1 bg-secondary rounded-full"></div>
                                    <p className="text-xl font-semibold text-gray-800">
                                        {t(operation.subtitleKey)}
                                    </p>
                                    <div className="text-lg text-gray-600 leading-relaxed space-y-4">
                                        {t(operation.fullKey)
                                            .split("\n\n")
                                            .map((paragraph, i) => (
                                                <p key={i}>{paragraph}</p>
                                            ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-primary" style={{ backgroundColor: "#f5f5f5" }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t("ops.page.cta.title")}
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        {t("ops.page.cta.subtitle")}
                    </p>
                    <Link
                        href="/#contact"
                        className="inline-block bg-secondary text-white font-semibold px-10 py-4 rounded-full hover:bg-secondary/90 transition-colors shadow-lg text-lg"
                    >
                        {t("contact.title")}
                    </Link>
                </div>
            </section>
        </div>
    );
}
