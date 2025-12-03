"use client";

import { useI18n } from "@/lib/i18n";
import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
    const { t } = useI18n();

    return (
        <section id="contact" className="py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        {t("contact.title")}
                    </h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Contact Info */}
                    <div className="bg-primary text-white p-10 rounded-2xl shadow-lg">
                        <h3 className="text-2xl font-bold mb-8">MADE mates Holding GmbH</h3>

                        <div className="space-y-8">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <p className="font-semibold text-lg mb-1">{t("contact.address")}</p>
                                    <p className="text-gray-300">Friedrichstraße 171</p>
                                    <p className="text-gray-300">10117 Berlin, Germany</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <p className="font-semibold text-lg mb-1">{t("contact.email")}</p>
                                    <a href="mailto:info@mademates.com" className="text-gray-300 hover:text-white transition-colors">
                                        info@mademates.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-secondary mt-1" />
                                <div>
                                    <p className="font-semibold text-lg mb-1">{t("contact.phone")}</p>
                                    <p className="text-gray-300">+49 30 123456789</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-10 h-48 bg-white/10 rounded-xl overflow-hidden relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.632770513513!2d13.38692637697693!3d52.51650663606626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c4d4d8b0a1%3A0x400c40e7a75c1c0!2sFriedrichstra%C3%9Fe%20171%2C%2010117%20Berlin!5e0!3m2!1sen!2sde!4v1709647200000!5m2!1sen!2sde"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 hover:opacity-100 transition-opacity"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        {t("contact.name")} *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
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
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-secondary hover:bg-blue-600 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-md"
                            >
                                {t("contact.submit")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
