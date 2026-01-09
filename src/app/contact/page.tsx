"use client";

import { useI18n } from "@/lib/i18n";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const { t } = useI18n();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus("idle");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setSubmitStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-primary text-white py-32">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary via-primary to-primary/80"></div>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        {t("contact.page.title")}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        {t("contact.page.subtitle")}
                    </p>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary mb-6">
                                {t("contact.page.form.title")}
                            </h2>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY} />
                                <input type="hidden" name="subject" value="New Contact Form Submission from MADE mates Website" />
                                <input type="hidden" name="from_name" value="MADE mates Website" />
                                <input type="hidden" name="redirect" value="false" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t("contact.name")} *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t("contact.email")} *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t("contact.company")}
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            {t("contact.phone")}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("contact.interest")}
                                    </label>
                                    <select
                                        id="interest"
                                        name="interest"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all bg-white"
                                    >
                                        <option value="all">{t("contact.all_ops")}</option>
                                        <option value="fashion">MADE mates Fashion</option>
                                        <option value="healthcare">MADE mates Healthcare</option>
                                        <option value="toys">MADE mates Toys</option>
                                        <option value="petstep">MADE mates Petstep</option>
                                        <option value="must">MADE mates MUST</option>
                                        <option value="power">MADE mates Power</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("contact.message")} *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                                    ></textarea>
                                </div>

                                {submitStatus === "success" && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                                        Thank you! Your message has been sent successfully.
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                                        Oops! Something went wrong. Please try again.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-md disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSubmitting ? "Sending..." : t("contact.submit")}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold text-primary mb-6">
                                    {t("contact.page.info.title")}
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    {t("contact.page.info.desc")}
                                </p>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-2xl space-y-6">
                                <div className="flex items-start space-x-4">
                                    <Building2 className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-lg text-primary mb-1">MADE mates Holding GmbH</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <MapPin className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-lg text-gray-900 mb-1">{t("contact.address")}</p>
                                        <p className="text-gray-600">Friedrichstraße 171</p>
                                        <p className="text-gray-600">10117 Berlin, Germany</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-lg text-gray-900 mb-1">{t("contact.email")}</p>
                                        <a href="mailto:info@made-mates.com" className="text-secondary hover:text-primary transition-colors">
                                            info@made-mates.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-lg text-gray-900 mb-1">{t("contact.phone")}</p>
                                        <a href="tel:+493012345678" className="text-gray-600 hover:text-primary transition-colors">
                                            +49 30 123456789
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.632770513513!2d13.38692637697693!3d52.51650663606626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c4d4d8b0a1%3A0x400c40e7a75c1c0!2sFriedrichstra%C3%9Fe%20171%2C%2010117%20Berlin!5e0!3m2!1sen!2sde!4v1709647200000!5m2!1sen!2sde"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
