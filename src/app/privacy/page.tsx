"use client";

import { useI18n } from "@/lib/i18n";
import Link from "next/link";

export default function PrivacyPage() {
    const { t } = useI18n();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="bg-white rounded-lg shadow-sm p-8 md:p-12">
                    <h1 className="text-4xl font-bold text-primary mb-8">{t("privacy.title")}</h1>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section1")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.general")}
                                </h3>
                                <p>
                                    {t("privacy.generalText")}
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section2")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.whoResponsible")}
                                </h3>
                                <p>
                                    {t("privacy.whoResponsibleText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.howCollect")}
                                </h3>
                                <p>
                                    {t("privacy.howCollectText1")}
                                </p>
                                <p>
                                    {t("privacy.howCollectText2")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.whatFor")}
                                </h3>
                                <p>
                                    {t("privacy.whatForText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.whatRights")}
                                </h3>
                                <p>
                                    {t("privacy.whatRightsText")}
                                </p>
                                <p>
                                    {t("privacy.whatRightsContact")}
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section3")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    {t("privacy.contactText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.collectedData")}
                                </h3>
                                <ul className="list-disc list-inside space-y-2 ml-4">
                                    <li>{t("privacy.collectedName")}</li>
                                    <li>{t("privacy.collectedEmail")}</li>
                                    <li>{t("privacy.collectedMessage")}</li>
                                    <li>{t("privacy.collectedTime")}</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.legalBasis")}
                                </h3>
                                <p>
                                    {t("privacy.legalBasisText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.recipients")}
                                </h3>
                                <p>
                                    {t("privacy.recipientsText")}{" "}
                                    <span className="font-medium">[EMAIL_SERVICE]</span>{" "}
                                    {t("privacy.recipientsText2")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.storage")}
                                </h3>
                                <p>
                                    {t("privacy.storageText1")}
                                </p>
                                <p>
                                    {t("privacy.storageText2")}
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section4")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    {t("privacy.hostingText1")}
                                </p>
                                Site & Sight
                                <p className="font-medium">www.siteandight.com</p>
                                <p>
                                    {t("privacy.hostingText2")}
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section5")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.noTracking")}
                                </h3>
                                <p dangerouslySetInnerHTML={{ __html: t("privacy.noTrackingText") }} />

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.essential")}
                                </h3>
                                <p>
                                    {t("privacy.essentialText")}
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section6")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    {t("privacy.rightsText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.rightInfo")}
                                </h3>
                                <p>
                                    {t("privacy.rightInfoText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.rightDeletion")}
                                </h3>
                                <p>
                                    {t("privacy.rightDeletionText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.rightPortability")}
                                </h3>
                                <p>
                                    {t("privacy.rightPortabilityText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.rightCorrection")}
                                </h3>
                                <p>
                                    {t("privacy.rightCorrectionText")}
                                </p>

                                <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
                                    {t("privacy.rightComplaint")}
                                </h3>
                                <p>
                                    {t("privacy.rightComplaintText")}
                                </p>
                            </div>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-primary mb-4">
                                {t("privacy.section7")}
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    {t("privacy.contactTitle")}
                                </p>
                                <p>
                                    <span className="font-medium">{t("impressum.email")}:</span>{" "}
                                    <a href="mailto:info@made-mates.com" className="text-secondary hover:underline">
                                        info@made-mates.com
                                    </a>
                                </p>
                                <p className="text-sm text-gray-600 mt-6">
                                    {t("privacy.updated")}: {new Date().toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </section>
                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <Link
                            href="/"
                            className="inline-flex items-center text-secondary hover:text-primary transition-colors font-medium"
                        >
                            {t("privacy.back")}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
