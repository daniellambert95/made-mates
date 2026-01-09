"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useI18n();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Only allow scroll effect on homepage
      if (pathname === '/') {
        setIsScrolled(window.scrollY > 20);
      } else {
        setIsScrolled(true); // Always scrolled state on other pages
      }
    };

    // Initialize on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);

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

  // Handle hash navigation from other pages
  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { key: "nav.home", id: "hero", scroll: true },
    { key: "nav.about", href: "/about", scroll: false },
    { key: "nav.operations", href: "/operations", scroll: false },
    { key: "nav.partner", id: "partner", scroll: true },
    { key: "nav.contact", href: "/contact", scroll: false },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`flex justify-between items-center transition-all duration-300 ${isScrolled ? 'h-20' : 'h-40'
            }`}>
            {/* Left: Page Links */}
            <div className="hidden md:flex space-x-8 items-center flex-1">
              {navLinks.slice(0, 3).map((link) => (
                link.scroll ? (
                  <button
                    key={link.key}
                    onClick={() => scrollToSection(link.id!)}
                    className={`font-medium transition-colors ${isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-gray-200'
                      }`}
                  >
                    {t(link.key)}
                  </button>
                ) : (
                  <Link
                    key={link.key}
                    href={link.href!}
                    className={`font-medium transition-colors ${isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-gray-200'
                      }`}
                  >
                    {t(link.key)}
                  </Link>
                )
              ))}
            </div>

            {/* Center: Logo */}
            <div
              className="shrink-0 flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2"
              onClick={() => scrollToSection("hero")}
            >
              <Image
                src="/images/logos/made-mates-nav-logo.webp"
                alt="MADE mates Holding"
                width={100}
                height={100}
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-12' : 'h-20'
                  }`}
                priority
              />
            </div>

            {/* Right: Remaining Links + Language + Social Icons */}
            <div className="hidden md:flex space-x-8 items-center flex-1 justify-end">
              {navLinks.slice(3).map((link) => (
                link.scroll ? (
                  <button
                    key={link.key}
                    onClick={() => scrollToSection(link.id!)}
                    className={`font-medium transition-colors ${isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-gray-200'
                      }`}
                  >
                    {t(link.key)}
                  </button>
                ) : (
                  <Link
                    key={link.key}
                    href={link.href!}
                    className={`font-medium transition-colors ${isScrolled
                      ? 'text-gray-700 hover:text-primary'
                      : 'text-white hover:text-gray-200'
                      }`}
                  >
                    {t(link.key)}
                  </Link>
                )
              ))}

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 transition-colors rounded-full px-3 py-1 ${isScrolled
                  ? 'text-gray-700 hover:text-primary border border-gray-200'
                  : 'text-white hover:text-gray-200 border border-white/30'
                  }`}
              >
                <Globe size={18} />
                <span className="font-medium">{language.toUpperCase()}</span>
              </button>

              {/* Social Icons */}
              {/* LinkedIn link commented out until LinkedIn page is set up */}
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
                  }`}
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a> */}

              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
                  }`}
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>

            {/* Mobile Menu Buttons */}
            <div className="md:hidden flex items-center justify-between flex-1">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
                  }`}
              >
                <Globe size={20} />
                <span className="font-medium">{language.toUpperCase()}</span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`focus:outline-none transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
                  }`}
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Rendered Outside Nav */}
      {isOpen && (
        <div
          className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-white z-[9999]"
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#ffffff'
          }}
        >
          {/* Close Button */}
          <div className="absolute top-6 right-6" style={{ zIndex: 10000 }}>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-primary transition-colors p-2"
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
          </div>

          {/* Menu Content */}
          <div
            className="w-full h-full flex flex-col items-center justify-center space-y-8 px-6"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100vh'
            }}
          >
            {navLinks.map((link) => (
              link.scroll ? (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.id!)}
                  className="text-2xl font-semibold text-gray-700 hover:text-primary transition-colors"
                >
                  {t(link.key)}
                </button>
              ) : (
                <Link
                  key={link.key}
                  href={link.href!}
                  className="text-2xl font-semibold text-gray-700 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {t(link.key)}
                </Link>
              )
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-8 pt-8">
              {/* LinkedIn link commented out until LinkedIn page is set up */}
              {/* <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a> */}
              <a
                href="https://wa.me/yourphonenumber"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
