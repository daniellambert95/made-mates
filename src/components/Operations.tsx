"use client";

import { useI18n } from "@/lib/i18n";
import { Shirt, Stethoscope, Gamepad2, Dog, Cpu, Zap, ArrowRight } from "lucide-react";

export default function Operations() {
    const { t } = useI18n();

    const operations = [
        {
            id: "fashion",
            title: "MADE mates Fashion",
            icon: <Shirt className="w-12 h-12 text-white" />,
            descKey: "ops.fashion.desc",
            color: "bg-pink-500", // Placeholder color, can be adjusted
        },
        {
            id: "healthcare",
            title: "MADE mates Healthcare",
            icon: <Stethoscope className="w-12 h-12 text-white" />,
            descKey: "ops.healthcare.desc",
            color: "bg-teal-500",
        },
        {
            id: "toys",
            title: "MADE mates Toys",
            icon: <Gamepad2 className="w-12 h-12 text-white" />,
            descKey: "ops.toys.desc",
            color: "bg-yellow-500",
        },
        {
            id: "petstep",
            title: "MADE mates Petstep",
            icon: <Dog className="w-12 h-12 text-white" />,
            descKey: "ops.petstep.desc",
            color: "bg-orange-500",
        },
        {
            id: "must",
            title: "MADE mates MUST",
            icon: <Cpu className="w-12 h-12 text-white" />,
            descKey: "ops.must.desc",
            color: "bg-indigo-500",
        },
        {
            id: "power",
            title: "MADE mates Power",
            icon: <Zap className="w-12 h-12 text-white" />,
            descKey: "ops.power.desc",
            color: "bg-red-500",
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
                            {/* Icon Header */}
                            <div className={`h-32 ${op.color} flex items-center justify-center relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                <div className="transform group-hover:scale-110 transition-transform duration-300">
                                    {op.icon}
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
                                    <span className="text-secondary font-medium flex items-center group-hover:translate-x-2 transition-transform cursor-pointer">
                                        {t("ops.cta")} <ArrowRight className="ml-2 w-4 h-4" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
