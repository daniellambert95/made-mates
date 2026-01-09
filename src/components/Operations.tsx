"use client";

import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import OperationModal from "./OperationModal";

export default function Operations() {
    const { t } = useI18n();
    const [selectedOperation, setSelectedOperation] = useState<string | null>(null);

    const operations = [
        {
            id: "fashion",
            title: "MADE mates Fashion",
            image: "/images/logos/brand-logos/fashion-logo.webp",
            modalImage: "/images/logos/brand-logos/fashion-logo.webp",
            descKey: "ops.fashion.desc",
        },
        {
            id: "healthcare",
            title: "MADE mates Healthcare",
            image: "/images/logos/brand-logos/healthcare-logo.webp",
            modalImage: "/images/logos/brand-logos/healthcare-logo.webp",
            descKey: "ops.healthcare.desc",
        },
        {
            id: "toys",
            title: "MADE mates Toys",
            image: "/images/logos/brand-logos/toys-logo.webp",
            modalImage: "/images/logos/brand-logos/toys-logo.webp",
            descKey: "ops.toys.desc",
        },
        {
            id: "petstep",
            title: "MADE mates Petstep",
            image: "/images/logos/brand-logos/petstep-logo.webp",
            modalImage: "/images/logos/brand-logos/petstep-logo.webp",
            descKey: "ops.petstep.desc",
        },
        {
            id: "must",
            title: "MADE mates MUST",
            image: "/images/logos/brand-logos/must-logo.webp",
            modalImage: "/images/logos/brand-logos/must-logo.webp",
            descKey: "ops.must.desc",
        },
        {
            id: "power",
            title: "MADE mates Power",
            image: "/images/logos/brand-logos/power-logo.webp",
            modalImage: "/images/logos/brand-logos/power-logo.webp",
            descKey: "ops.power.desc",
        },
    ];

    return (
        <section id="operations" className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {t("ops.title")}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {operations.map((op) => (
                        <div
                            key={op.id}
                            className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
                        >
                            {/* Logo Header */}
                            <div className="h-48 relative overflow-hidden flex items-center justify-center p-6" style={{ backgroundColor: '#f5f5f5' }}>
                                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={op.image}
                                        alt={op.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                                    {op.title}
                                </h3>
                                <p className="text-gray-600 mb-6 flex-grow">
                                    {t(op.descKey)}
                                </p>

                                <div className="mt-auto pt-4 border-t border-gray-100">
                                    <button
                                        onClick={() => setSelectedOperation(op.id)}
                                        className="text-secondary font-medium flex items-center group-hover:translate-x-2 transition-transform"
                                    >
                                        {t("ops.cta")} <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedOperation && (
                <OperationModal
                    isOpen={true}
                    onClose={() => setSelectedOperation(null)}
                    title={operations.find((op) => op.id === selectedOperation)?.title || ""}
                    subtitle={t(`ops.${selectedOperation}.subtitle`)}
                    description={t(`ops.${selectedOperation}.full`)}
                    image={operations.find((op) => op.id === selectedOperation)?.modalImage || ""}
                />
            )}
        </section>
    );
}
