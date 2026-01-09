"use client";

import { useI18n } from "@/lib/i18n";
import { Building2, Globe2, Target, TrendingUp, Users, Award } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
    const { t } = useI18n();

    const stats = [
        {
            icon: <Building2 className="w-8 h-8 text-secondary mb-2" />,
            value: "11",
            label: t("about.stat.industries"),
        },
        {
            icon: <Globe2 className="w-8 h-8 text-secondary mb-2" />,
            value: "20+",
            label: t("about.stat.countries"),
        },
        {
            icon: <Users className="w-8 h-8 text-secondary mb-2" />,
            value: "40+",
            label: t("about.stat.years"),
        },
    ];

    const values = [
        {
            icon: <Target className="w-12 h-12 text-secondary" />,
            title: t("about.value.innovation"),
            description: t("about.value.innovation.desc"),
        },
        {
            icon: <Award className="w-12 h-12 text-secondary" />,
            title: t("about.value.quality"),
            description: t("about.value.quality.desc"),
        },
        {
            icon: <TrendingUp className="w-12 h-12 text-secondary" />,
            title: t("about.value.growth"),
            description: t("about.value.growth.desc"),
        },
        {
            icon: <Users className="w-12 h-12 text-secondary" />,
            title: t("about.value.partnership"),
            description: t("about.value.partnership.desc"),
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
                        {t("about.page.title")}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        {t("about.page.subtitle")}
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-primary">
                                {t("about.page.who")}
                            </h2>
                            <div className="w-20 h-1 bg-secondary rounded-full"></div>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t("about.desc")}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {t("about.page.who.desc")}
                            </p>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-8 bg-gray-50 rounded-xl text-center hover:shadow-lg transition-shadow border border-gray-100"
                                >
                                    <div className="flex justify-center">{stat.icon}</div>
                                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t("about.page.mission")}
                        </h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-8"></div>
                        <p className="text-2xl md:text-3xl font-semibold text-primary italic">
                            {t("about.page.mission.desc")}
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
                            {t("about.page.whatwedo")}
                        </h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-12"></div>
                        <div className="space-y-8">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {t("about.page.whatwedo.p1")}
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {t("about.page.whatwedo.p2")}
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                {t("about.page.whatwedo.p3")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t("about.page.values")}
                        </h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
                            >
                                <div className="mb-6 flex justify-center">{value.icon}</div>
                                <h3 className="text-xl font-bold text-primary mb-4 text-center">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Operations Overview */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                            {t("about.page.operations")}
                        </h2>
                        <div className="w-20 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            {t("about.page.operations.desc")}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                        {[
                            { name: "MADE mates Fashion GmbH", logo: "/images/logos/brand-logos/fashion-logo.webp" },
                            { name: "MADE mates Healthcare GmbH", logo: "/images/logos/brand-logos/healthcare-logo.webp" },
                            { name: "MADE mates Toys GmbH", logo: "/images/logos/brand-logos/toys-logo.webp" },
                            { name: "MADE mates Petstep GmbH", logo: "/images/logos/brand-logos/petstep-logo.webp" },
                            { name: "MADE mates MUST GmbH", logo: "/images/logos/brand-logos/must-logo.webp" },
                            { name: "MADE mates Power GmbH", logo: "/images/logos/brand-logos/power-logo.webp" },
                        ].map((operation, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 rounded-xl text-center hover:bg-gray-100 transition-colors border border-gray-200 flex flex-col items-center gap-4"
                            >
                                <div className="relative w-full h-24">
                                    <Image
                                        src={operation.logo}
                                        alt={operation.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <p className="font-semibold text-primary text-sm">{operation.name}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            href="/operations"
                            className="inline-block bg-secondary text-white font-semibold px-8 py-4 rounded-full hover:bg-secondary/90 transition-colors shadow-lg"
                        >
                            {t("about.page.operations.cta")}
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 text-primary" style={{ backgroundColor: '#f5f5f5' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t("about.page.cta.title")}
                    </h2>
                    <p className="text-xl text-gray-700 mb-8">
                        {t("about.page.cta.subtitle")}
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
