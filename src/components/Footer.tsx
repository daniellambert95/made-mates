"use client";

import { useI18n } from "@/lib/i18n";
import { Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    const { t } = useI18n();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-primary text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">
                    {/* Company Info */}
                    <div>
                        <div className="mb-6">
                            <Image
                                src="/images/logos/made-mates-logo-2.webp"
                                alt="MADE mates Holding"
                                width={150}
                                height={50}
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            {t("hero.intro")}
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
                            {t("nav.home")}
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <button onClick={() => scrollToSection("about")} className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.about")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("operations")} className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.operations")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("partner")} className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.partner")}
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("contact")} className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.contact")}
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Operations */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
                            {t("nav.operations")}
                        </h4>
                        <ul className="space-y-3">
                            <li><span className="text-gray-300">MADE mates Fashion</span></li>
                            <li><span className="text-gray-300">MADE mates Healthcare</span></li>
                            <li><span className="text-gray-300">MADE mates Toys</span></li>
                            <li><span className="text-gray-300">MADE mates Petstep</span></li>
                            <li><span className="text-gray-300">MADE mates MUST</span></li>
                            <li><span className="text-gray-300">MADE mates Power</span></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">
                            {t("nav.contact")}
                        </h4>
                        <address className="not-italic text-gray-300 space-y-3">
                            <p>MADE mates Holding GmbH</p>
                            <p>Friedrichstraße 171</p>
                            <p>10117 Berlin, Germany</p>
                            <p className="pt-2">info@mademates.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} MADE mates Holding GmbH. {t("footer.rights")}
                    </p>
                    <a
                        href="https://www.siteandsight.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 text-sm hover:text-secondary transition-colors duration-300"
                    >
                        Webdesign by <span className="font-semibold">Site&Sight</span>
                    </a>
                    <p className="text-gray-500 text-sm">
                        {t("footer.tagline")}
                    </p>
                </div>
            </div>
        </footer>
    );
}
