"use client";

import { useI18n } from "@/lib/i18n";
import { Building2, Globe2, Briefcase } from "lucide-react";

export default function About() {
    const { t } = useI18n();

    const stats = [
        {
            icon: <Briefcase className="w-8 h-8 text-secondary mb-2" />,
            value: "10+",
            label: "about.stat.years",
        },
        {
            icon: <Building2 className="w-8 h-8 text-secondary mb-2" />,
            value: "6",
            label: "about.stat.industries",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-secondary mb-2" />,
            value: "20+",
            label: "about.stat.countries",
        },
    ];

    return (
        <section id="about" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {t("about.title")}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {t("about.desc")}
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            At MADE mates Holding, we believe in the power of diversity and specialization.
                            By fostering independent yet interconnected divisions, we ensure that each sector
                            receives the dedicated focus it needs to thrive, while benefiting from the
                            strength and stability of a unified holding structure.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-md transition-shadow border border-gray-100"
                            >
                                <div className="flex justify-center">{stat.icon}</div>
                                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                                <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                                    {t(stat.label)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
