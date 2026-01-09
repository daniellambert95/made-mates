"use client";

import { useI18n } from "@/lib/i18n";
import { Layers, Award, ShieldCheck, Lightbulb } from "lucide-react";

export default function WhyPartner() {
    const { t } = useI18n();

    const features = [
        {
            icon: <Layers className="w-10 h-10 text-secondary" />,
            titleKey: "partner.diverse",
            descKey: "partner.diverse.desc",
        },
        {
            icon: <Award className="w-10 h-10 text-secondary" />,
            titleKey: "partner.expert",
            descKey: "partner.expert.desc",
        },
        {
            icon: <ShieldCheck className="w-10 h-10 text-secondary" />,
            titleKey: "partner.reliable",
            descKey: "partner.reliable.desc",
        },
        {
            icon: <Lightbulb className="w-10 h-10 text-secondary" />,
            titleKey: "partner.innovation",
            descKey: "partner.innovation.desc",
        },
    ];

    return (
        <section id="partner" className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {t("partner.title")}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {t(feature.titleKey)}
                            </h3>
                            <p className="text-gray-600">
                                {t(feature.descKey)}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Extended Why Partner Content */}
                <div className="mt-24 max-w-4xl mx-auto space-y-8 text-center">
                    <h3 className="text-3xl font-bold text-primary mb-8">
                        {t("partner.extended.title")}
                    </h3>

                    <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                        <p className="font-semibold text-xl text-primary">
                            {t("partner.extended.p1")}
                        </p>
                        <p>{t("partner.extended.p2")}</p>
                        <p>{t("partner.extended.p3")}</p>
                        <p>{t("partner.extended.p4")}</p>
                        <p className="font-semibold text-xl text-primary mt-8">
                            {t("partner.extended.p5")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
