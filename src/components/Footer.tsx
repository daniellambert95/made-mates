"use client";

import { useI18n } from "@/lib/i18n";
import { Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Footer() {
    const { t } = useI18n();
    const router = useRouter();
    const pathname = usePathname();

    const scrollToSection = (id: string) => {
        // If we're not on the homepage, navigate there first
        if (pathname !== '/') {
            router.push(`/#${id}`);
            return;
        }

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
                                src="/images/logos/made-mates-nav-logo.webp"
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
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
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
                                <Link href="/about" className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.about")}
                                </Link>
                            </li>
                            <li>
                                <Link href="/operations" className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.operations")}
                                </Link>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection("partner")} className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.partner")}
                                </button>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-300 hover:text-secondary transition-colors">
                                    {t("nav.contact")}
                                </Link>
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
                            <p className="pt-2">info@made-mates.com</p>
                        </address>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
                        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                            <Link
                                href="/impressum"
                                className="text-gray-400 hover:text-secondary transition-colors"
                            >
                                {t("footer.imprint")}
                            </Link>
                            <Link
                                href="/privacy"
                                className="text-gray-400 hover:text-secondary transition-colors"
                            >
                                {t("footer.privacy")}
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
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
            </div>
        </footer>
    );
}
