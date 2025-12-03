"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "de" : "en");
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
    { key: "nav.home", id: "hero" },
    { key: "nav.about", id: "about" },
    { key: "nav.operations", id: "operations" },
    { key: "nav.partner", id: "partner" },
    { key: "nav.contact", id: "contact" },
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
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                    }`}
                >
                  {t(link.key)}
                </button>
              ))}
            </div>

            {/* Center: Logo */}
            <div
              className="shrink-0 flex items-center cursor-pointer absolute left-1/2 transform -translate-x-1/2"
              onClick={() => scrollToSection("hero")}
            >
              <Image
                src="/images/logos/made-mates-logo-2.webp"
                alt="MADE mates Holding"
                width={300}
                height={100}
                className={`w-auto transition-all duration-300 ${isScrolled ? 'h-16' : 'h-32'
                  }`}
                priority
              />
            </div>

            {/* Right: Remaining Links + Language + Social Icons */}
            <div className="hidden md:flex space-x-8 items-center flex-1 justify-end">
              {navLinks.slice(3).map((link) => (
                <button
                  key={link.key}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-medium transition-colors ${isScrolled
                    ? 'text-gray-700 hover:text-primary'
                    : 'text-white hover:text-gray-200'
                    }`}
                >
                  {t(link.key)}
                </button>
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
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
                  }`}
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isScrolled
                  ? 'text-gray-700 hover:text-primary'
                  : 'text-white hover:text-gray-200'
                  }`}
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
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
              <button
                key={link.key}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl font-semibold text-gray-700 hover:text-primary transition-colors"
              >
                {t(link.key)}
              </button>
            ))}

            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-8 pt-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
