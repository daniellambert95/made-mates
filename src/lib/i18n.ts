"use client";

import { useState, useEffect } from "react";

export type Language = "en" | "de";

type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        // Header
        "nav.home": "Home",
        "nav.about": "About",
        "nav.operations": "Operations",
        "nav.contact": "Contact",
        "nav.partner": "Why Partner",

        // Hero
        "hero.tagline": "Innovating for a Diverse Future",
        "hero.intro": "MADE mates Holding GmbH drives growth across fashion, healthcare, toys, pet care, electronics, and energy sectors.",
        "hero.cta.explore": "Explore Our Operations",
        "hero.cta.contact": "Contact Us",

        // About
        "about.title": "About MADE mates Holding",
        "about.desc": "We are a diversified holding company managing a portfolio of specialized divisions. Our expertise spans across multiple industries, delivering innovation and reliability to B2B partners worldwide.",
        "about.stat.years": "Years in Business",
        "about.stat.industries": "Industries Served",
        "about.stat.countries": "Countries Reached",

        // Operations
        "ops.title": "Our Operations",
        "ops.fashion.desc": "Trade, design, and distribution of clothing and fashion articles, starting with rainwear.",
        "ops.healthcare.desc": "Robotic and traditional healthcare products, medical equipment, and hospital beds.",
        "ops.toys.desc": "Wholesale trade and distribution of toys for retailers and chains.",
        "ops.petstep.desc": "Pet products including electric grooming devices and automotive safety products.",
        "ops.must.desc": "Electronic signal connectors for circuit boards, serving industrial and automotive clients.",
        "ops.power.desc": "Metal enclosures for control cabinets, inverters, and energy sector components.",
        "ops.cta": "Learn More",

        // Why Partner
        "partner.title": "Why Partner With Us",
        "partner.diverse": "Diverse Portfolio",
        "partner.diverse.desc": "We operate across 6 distinct high-growth industries.",
        "partner.expert": "Industry Expertise",
        "partner.expert.desc": "Deep knowledge and specialized teams in every sector.",
        "partner.reliable": "Reliable Partnerships",
        "partner.reliable.desc": "Built on trust, quality, and long-term collaboration.",
        "partner.innovation": "Innovation Focus",
        "partner.innovation.desc": "Constantly evolving with market trends and technology.",

        // Contact
        "contact.title": "Get in Touch",
        "contact.name": "Name",
        "contact.email": "Email",
        "contact.company": "Company Name",
        "contact.phone": "Phone Number",
        "contact.interest": "Interested in",
        "contact.message": "Message",
        "contact.submit": "Send Message",
        "contact.address": "Address",
        "contact.all_ops": "All Operations",

        // Footer
        "footer.rights": "All rights reserved.",
        "footer.tagline": "Building the future, together.",
    },
    de: {
        // Header
        "nav.home": "Startseite",
        "nav.about": "Über Uns",
        "nav.operations": "Geschäftsbereiche",
        "nav.contact": "Kontakt",
        "nav.partner": "Partner werden",

        // Hero
        "hero.tagline": "Innovation für eine vielfältige Zukunft",
        "hero.intro": "MADE mates Holding GmbH fördert Wachstum in den Bereichen Mode, Gesundheitswesen, Spielwaren, Heimtierbedarf, Elektronik und Energie.",
        "hero.cta.explore": "Unsere Bereiche",
        "hero.cta.contact": "Kontaktieren Sie uns",

        // About
        "about.title": "Über MADE mates Holding",
        "about.desc": "Wir sind eine diversifizierte Holdinggesellschaft, die ein Portfolio spezialisierter Geschäftsbereiche verwaltet. Unsere Expertise erstreckt sich über mehrere Branchen und liefert Innovation und Zuverlässigkeit für B2B-Partner weltweit.",
        "about.stat.years": "Jahre im Geschäft",
        "about.stat.industries": "Branchen",
        "about.stat.countries": "Länder",

        // Operations
        "ops.title": "Unsere Geschäftsbereiche",
        "ops.fashion.desc": "Handel, Import und Export sowie Vertrieb von Bekleidung, Modeartikeln und Accessoires. Entwicklung eigener Modekollektionen, beginnend mit Regenbekleidung.",
        "ops.healthcare.desc": "Handel und Vertrieb von medizinischen Produkten, Hilfsmitteln und Gesundheitsequipment, insbesondere Kranken- und Pflegebetten sowie robotisierte Lösungen.",
        "ops.toys.desc": "Handel, Import und Export sowie Vertrieb von Spielwaren aller Art für Großhändler und Fachhandelsketten.",
        "ops.petstep.desc": "Handel und Vertrieb von Heimtierbedarf, insbesondere elektrische Fellpflege- und Waschbürsten sowie Sicherheits- und Transportlösungen.",
        "ops.must.desc": "Entwicklung, Handel und Vertrieb von elektronischen Bauteilen, insbesondere Signalkonnektoren für Leiterplatten für die Automobilindustrie.",
        "ops.power.desc": "Handel, Herstellung und Vertrieb von Metall- und Stahlgehäusen für Schaltschränke, Wechselrichter und Ladeinfrastrukturkomponenten.",
        "ops.cta": "Mehr erfahren",

        // Why Partner
        "partner.title": "Warum mit uns arbeiten?",
        "partner.diverse": "Vielfältiges Portfolio",
        "partner.diverse.desc": "Wir sind in 6 verschiedenen Wachstumsbranchen tätig.",
        "partner.expert": "Branchenexpertise",
        "partner.expert.desc": "Tiefes Wissen und spezialisierte Teams in jedem Sektor.",
        "partner.reliable": "Verlässliche Partnerschaften",
        "partner.reliable.desc": "Aufgebaut auf Vertrauen, Qualität und langfristiger Zusammenarbeit.",
        "partner.innovation": "Innovationsfokus",
        "partner.innovation.desc": "Stetige Weiterentwicklung mit Markttrends und Technologie.",

        // Contact
        "contact.title": "Kontakt aufnehmen",
        "contact.name": "Name",
        "contact.email": "E-Mail",
        "contact.company": "Firmenname",
        "contact.phone": "Telefonnummer",
        "contact.interest": "Interessiert an",
        "contact.message": "Nachricht",
        "contact.submit": "Nachricht senden",
        "contact.address": "Adresse",
        "contact.all_ops": "Alle Bereiche",

        // Footer
        "footer.rights": "Alle Rechte vorbehalten.",
        "footer.tagline": "Gemeinsam die Zukunft bauen.",
    },
};

// Global language state
let globalLanguage: Language = "en";

// Get initial language from localStorage (client-side only)
if (typeof window !== "undefined") {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "de")) {
        globalLanguage = saved;
    }
}

// Hook that listens to language changes
export function useI18n() {
    const [language, setLanguageState] = useState<Language>(globalLanguage);

    useEffect(() => {
        // Listen for language change events
        const handleLanguageChange = () => {
            setLanguageState(globalLanguage);
        };

        window.addEventListener("languagechange", handleLanguageChange);
        return () => window.removeEventListener("languagechange", handleLanguageChange);
    }, []);

    const setLanguage = (lang: Language) => {
        globalLanguage = lang;
        setLanguageState(lang);
        if (typeof window !== "undefined") {
            localStorage.setItem("language", lang);
            // Trigger re-render of all components
            window.dispatchEvent(new Event("languagechange"));
        }
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return { language, setLanguage, t };
}
