"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export default function ImpressumPage() {
    const { t } = useI18n();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-primary mb-8">{t("impressum.title")}</h1>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.section1")}
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p className="font-medium">MADE mates Holding GmbH</p>
                                <p>Friedrichstraße 171</p>
                                <p>10117 Berlin</p>
                                <p>Germany</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.contact")}
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <span className="font-medium">{t("impressum.email")}:</span>{" "}
                                    <a href="mailto:info@made-mates.com" className="text-secondary hover:underline">
                                        info@made-mates.com
                                    </a>
                                </p>
                                <p>
                                    <span className="font-medium">{t("impressum.phone")}:</span> [PHONE]
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.representative")}
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <span className="font-medium">{t("impressum.managing")}:</span> Dennis Stetzkowski
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.register")}
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <span className="font-medium">{t("impressum.registerEntry")}:</span>
                                </p>
                                <p>{t("impressum.registerCourt")}: [REGISTER_COURT]</p>
                                <p>{t("impressum.registerNumber")}: [REGISTER_NUMBER]</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.vat")}
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    {t("impressum.vatText")}:
                                </p>
                                <p className="font-medium">[VAT_NUMBER]</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.euDispute")}
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <p>
                                    {t("impressum.euDisputeText")}:{" "}
                                    <a
                                        href="https://ec.europa.eu/consumers/odr/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary hover:underline"
                                    >
                                        https://ec.europa.eu/consumers/odr/
                                    </a>
                                    .
                                </p>
                                <p>{t("impressum.euDisputeEmail")}</p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("impressum.consumerDispute")}
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <p>
                                    {t("impressum.consumerDisputeText")}
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link
                            href="/"
                            className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                        >
                            {t("impressum.back")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
