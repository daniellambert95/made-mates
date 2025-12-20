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
        "about.title": "About MADE mates",
        "about.desc": "We are a diversified holding company managing a portfolio of specialized divisions. Our expertise spans across multiple industries, delivering innovation and reliability to B2B partners worldwide.",
        "about.stat.years": "years of business experience",
        "about.stat.industries": "Industries Served",
        "about.stat.countries": "Countries Reached",

        // About Page
        "about.page.title": "About MADE mates Holding",
        "about.page.subtitle": "A diversified holding company driving innovation across six specialized industries",
        "about.page.who": "Who We Are",
        "about.page.who.desc": "At MADE mates Holding, we believe in the power of diversity and specialization. By fostering independent yet interconnected divisions, we ensure that each sector receives the dedicated focus it needs to thrive, while benefiting from the strength and stability of a unified holding structure.",
        "about.page.values": "Our Values",
        "about.value.innovation": "Innovation",
        "about.value.innovation.desc": "We constantly evolve with market trends and embrace new technologies to stay ahead.",
        "about.value.quality": "Quality",
        "about.value.quality.desc": "Excellence is at the core of everything we do, from products to partnerships.",
        "about.value.growth": "Growth",
        "about.value.growth.desc": "We foster sustainable growth across all our operations and support our partners' success.",
        "about.value.partnership": "Partnership",
        "about.value.partnership.desc": "Built on trust, transparency, and long-term collaboration with our B2B partners.",
        "about.page.operations": "Our Operations",
        "about.page.operations.desc": "Six specialized divisions, each a leader in their respective industry, united under one holding structure.",
        "about.page.operations.cta": "Explore Our Operations",
        "about.page.cta.title": "Ready to Partner with Us?",
        "about.page.cta.subtitle": "Join our network of successful B2B partners and discover how we can grow together.",

        // Operations
        "ops.title": "Our Operations",
        "ops.page.title": "Our Operations",
        "ops.page.subtitle": "Six specialized divisions delivering excellence across diverse industries",
        "ops.page.cta.title": "Interested in Partnering?",
        "ops.page.cta.subtitle": "Contact us to learn more about our operations and how we can work together.",
        "ops.fashion.desc": "Trade, design, and distribution of clothing and fashion articles, starting with rainwear.",
        "ops.fashion.subtitle": "Fashion, Design & Lifestyle – Developed for people who expect more",
        "ops.fashion.full": "MADE mates Fashion GmbH stands for modern styles, high-quality materials and smart collections. Our focus is on the trade, design and distribution of innovative fashion products – from functional rainwear and trendy accessories to complete fashion collections.\n\nWe develop our own designs, rely on responsible material selection and combine function with contemporary look. Today we specialize in high-quality outerwear, tomorrow we will flexibly expand our range to include other fashion areas. MADE mates Fashion – where style and quality become one.",
        "ops.healthcare.desc": "Robotic and traditional healthcare products, medical equipment, and hospital beds.",
        "ops.healthcare.subtitle": "Innovative Healthcare Solutions for Professional Users",
        "ops.healthcare.full": "MADE mates Healthcare GmbH offers a wide range of medical products and modern health technologies. Our portfolio includes classic and robotic health products, care and hospital beds as well as diverse medical equipment for professional use.\n\nWe supply medical supply stores, clinics and specialist companies with reliable, efficient and future-oriented solutions. Whether manual products or automated systems: We support the healthcare sector with technologies that facilitate processes and improve care.",
        "ops.toys.desc": "Wholesale trade and distribution of toys for retailers and chains.",
        "ops.toys.subtitle": "Toys for Wholesalers – Quality, Safety & Fun",
        "ops.toys.full": "MADE mates Toys GmbH is your reliable partner for high-quality toys of all kinds. As a specialized wholesale supplier, we supply retail chains, wholesalers and resellers with a diverse portfolio of products that bring joy to children and meet the highest safety standards.\n\nFrom classic toys to trendy novelties – we ensure strong assortments and reliable supply chains.",
        "ops.petstep.desc": "Pet products including electric grooming devices and automotive safety products.",
        "ops.petstep.subtitle": "Modern Products for Happy Pets & More Safety in Everyday Life",
        "ops.petstep.full": "MADE mates Petstep GmbH stands for innovative pet solutions. Our range includes electric grooming devices, wash brushes, transport and safety products – including specialized solutions for the safe transport of pets in vehicles.\n\nWe develop products that combine animal welfare, comfort and function. In addition, we are continuously expanding our range to include new, smart solutions for pet owners.",
        "ops.must.desc": "Electronic signal connectors for circuit boards, serving industrial and automotive clients.",
        "ops.must.subtitle": "Electronic Components for the Highest Industrial Requirements",
        "ops.must.full": "MADE mates MUST GmbH develops and distributes precise electronic components for industrial applications. Our focus is on high-quality signal connectors and PCB components that are used in the automotive industry, mechanical engineering and other high-tech sectors.\n\nWith technical know-how, high-quality standards and customer-specific solutions, we support manufacturers and suppliers in realizing reliable and high-performance electronic systems.",
        "ops.power.desc": "Metal enclosures for control cabinets, inverters, and energy sector components.",
        "ops.power.subtitle": "Housing Solutions & Components for the Energy of Tomorrow",
        "ops.power.full": "MADE mates Power GmbH specializes in metal and steel housings for technical applications – from control cabinets and inverter systems to charging infrastructure. We manufacture, trade and deliver precise housing solutions for the energy and industrial sectors.\n\nOur products create protection, structure and security in demanding environments. MADE mates Power stands for durable quality, flexible production possibilities and reliable partnerships.",
        "ops.cta": "More info",

        // Why Partner
        "partner.title": "Why Become a MADE mate",
        "partner.diverse": "Diverse Portfolio",
        "partner.diverse.desc": "We operate across 6 distinct high-growth industries.",
        "partner.expert": "Industry Expertise",
        "partner.expert.desc": "Deep knowledge and specialized teams in every sector.",
        "partner.reliable": "Reliable Partnerships",
        "partner.reliable.desc": "Built on trust, quality, and long-term collaboration.",
        "partner.innovation": "Innovation Focus",
        "partner.innovation.desc": "Constantly evolving with market trends and technology.",

        // Home CTA
        "home.cta.title": "Ready to Explore Our Operations?",
        "home.cta.subtitle": "Discover how MADE mates Holding can be your trusted partner across diverse industries.",
        "home.cta.contact": "Get in Touch",
        "home.cta.learn": "Learn More",

        // Contact
        "contact.title": "Get in Touch",
        "contact.page.title": "Contact Us",
        "contact.page.subtitle": "Let's discuss how we can partner together for success",
        "contact.page.form.title": "Send us a Message",
        "contact.page.info.title": "Contact Information",
        "contact.page.info.desc": "Our team is ready to answer your questions and discuss potential partnerships across our diverse operations.",
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
        "footer.imprint": "Imprint",
        "footer.privacy": "Privacy Policy",

        // Cookie Banner
        "cookie.title": "Cookie Notice",
        "cookie.message": "This website uses <strong>no tracking cookies</strong> or analytics tools. We only use essential cookies required for the contact form functionality. These cookies do not store any personal data.",
        "cookie.privacy": "For more information, see our",
        "cookie.privacyLink": "Privacy Policy",
        "cookie.accept": "Got it",

        // Impressum
        "impressum.title": "Imprint",
        "impressum.back": "← Back to Homepage",
        "impressum.constructionNotice": "Website Under Construction",
        "impressum.constructionText": "This website is currently being developed and will be fully operational by the end of January 2026. All contact information provided below remains valid and can be used for inquiries.",
        "impressum.section1": "Information in accordance with § 5 TMG",
        "impressum.contact": "Contact",
        "impressum.email": "E-mail",
        "impressum.phone": "Phone",
        "impressum.representative": "Represented by",
        "impressum.managing": "CEO",
        "impressum.register": "Register Entry",
        "impressum.registerEntry": "Entry in the Commercial Register",
        "impressum.registerCourt": "Register Court",
        "impressum.registerNumber": "Register Number",
        "impressum.vat": "VAT ID",
        "impressum.vatText": "VAT identification number according to §27 a of the Sales Tax Law",
        "impressum.euDispute": "EU Dispute Resolution",
        "impressum.euDisputeText": "The European Commission provides a platform for online dispute resolution (ODR)",
        "impressum.euDisputeEmail": "Our email address can be found above in the imprint.",
        "impressum.consumerDispute": "Consumer Dispute Resolution/Universal Arbitration Board",
        "impressum.consumerDisputeText": "We are not willing or obliged to participate in dispute resolution proceedings before a consumer arbitration board.",

        // Privacy
        "privacy.title": "Privacy Policy",
        "privacy.back": "← Back to Homepage",
        "privacy.updated": "Updated",
        "privacy.section1": "1. Data Protection at a Glance",
        "privacy.general": "General Information",
        "privacy.generalText": "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally. For detailed information on data protection, please refer to our privacy policy below.",
        "privacy.section2": "2. Data Collection on This Website",
        "privacy.whoResponsible": "Who is responsible for data collection on this website?",
        "privacy.whoResponsibleText": "Data processing on this website is carried out by the website operator. You can find their contact details in the imprint of this website.",
        "privacy.howCollect": "How do we collect your data?",
        "privacy.howCollectText1": "Your data is collected when you provide it to us. This may include data you enter in a contact form.",
        "privacy.howCollectText2": "Other data is collected automatically or with your consent when you visit the website through our IT systems. This primarily includes technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website.",
        "privacy.whatFor": "What do we use your data for?",
        "privacy.whatForText": "Some of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior if you have consented.",
        "privacy.whatRights": "What rights do you have regarding your data?",
        "privacy.whatRightsText": "You have the right at any time to receive information free of charge about the origin, recipient, and purpose of your stored personal data. You also have the right to request correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right, under certain circumstances, to request restriction of the processing of your personal data. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.",
        "privacy.whatRightsContact": "You can contact us at any time regarding this and other questions about data protection.",
        "privacy.section3": "3. Contact Form",
        "privacy.contactText": "If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions.",
        "privacy.collectedData": "Collected Data",
        "privacy.collectedName": "Name (first and last name)",
        "privacy.collectedEmail": "Email address",
        "privacy.collectedMessage": "Message content",
        "privacy.collectedTime": "Time of inquiry",
        "privacy.legalBasis": "Legal Basis",
        "privacy.legalBasisText": "The processing of data entered in the contact form is based on a legitimate interest (Art. 6 Para. 1 lit. f GDPR). By providing the contact form, we want to enable you to contact us easily. The information you provide will be stored for the purpose of processing the inquiry and for possible follow-up questions.",
        "privacy.recipients": "Recipients of the Data",
        "privacy.recipientsText": "The data entered via the contact form is processed via the email service",
        "privacy.recipientsText2": "and forwarded to the specified email address.",
        "privacy.storage": "Storage Duration",
        "privacy.storageText1": "We do not pass on this data without your consent. The processing of this data is based on Art. 6 Para. 1 lit. b GDPR if your inquiry is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries directed to us (Art. 6 Para. 1 lit. f GDPR) or on your consent (Art. 6 Para. 1 lit. a GDPR) if this has been requested.",
        "privacy.storageText2": "The data you enter in the contact form will remain with us until you request deletion, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your inquiry has been processed). Mandatory legal provisions – especially retention periods – remain unaffected.",
        "privacy.section4": "4. Hosting",
        "privacy.hostingText1": "We host the content of our website with the following provider:",
        "privacy.hostingText2": "Details about this provider and the processing of your data can be found in the hosting provider's privacy policy.",
        "privacy.section5": "5. Cookies and Tracking",
        "privacy.noTracking": "No Tracking Cookies",
        "privacy.noTrackingText": "This website uses <strong>no tracking cookies</strong> or analytics tools like Google Analytics. We do not track your user behavior and do not create user profiles.",
        "privacy.essential": "Essential Cookies",
        "privacy.essentialText": "We only use technically necessary cookies that are required for the functionality of the contact form. These cookies do not store any personal data and are automatically deleted after your session.",
        "privacy.section6": "6. Your Rights",
        "privacy.rightsText": "You have the right at any time, within the framework of applicable legal provisions, to receive information free of charge about your stored personal data, its origin and recipients, and the purpose of data processing, and if applicable, a right to correction or deletion of this data.",
        "privacy.rightInfo": "Right to Information",
        "privacy.rightInfoText": "You have the right to request information about your personal data processed by us.",
        "privacy.rightDeletion": "Right to Deletion",
        "privacy.rightDeletionText": "You have the right to request the deletion of your personal data stored with us, provided that processing is not necessary for exercising the right to freedom of expression and information, for compliance with a legal obligation, for reasons of public interest, or for establishing, exercising, or defending legal claims.",
        "privacy.rightPortability": "Right to Data Portability",
        "privacy.rightPortabilityText": "You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format.",
        "privacy.rightCorrection": "Right to Correction",
        "privacy.rightCorrectionText": "You have the right to request the correction of incorrect or completion of your personal data stored with us.",
        "privacy.rightComplaint": "Right to Lodge a Complaint with the Competent Supervisory Authority",
        "privacy.rightComplaintText": "In the event of violations of the GDPR, data subjects have the right to lodge a complaint with a supervisory authority, in particular in the member state of their habitual residence, their place of work, or the place of the alleged violation. The right to lodge a complaint is without prejudice to other administrative or judicial remedies.",
        "privacy.section7": "7. Contact",
        "privacy.contactTitle": "For questions about data protection or to exercise your rights, you can contact us at any time:",
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
        "about.stat.years": "Jahre Geschäfts-erfahrung",
        "about.stat.industries": "Branchen",
        "about.stat.countries": "Länder",

        // About Page
        "about.page.title": "Über MADE mates Holding",
        "about.page.subtitle": "Eine diversifizierte Holdinggesellschaft, die Innovation in sechs spezialisierten Branchen vorantreibt",
        "about.page.who": "Wer wir sind",
        "about.page.who.desc": "Bei MADE mates Holding glauben wir an die Kraft von Vielfalt und Spezialisierung. Durch die Förderung unabhängiger, aber miteinander verbundener Geschäftsbereiche stellen wir sicher, dass jeder Sektor die dedizierte Aufmerksamkeit erhält, die er zum Gedeihen benötigt, während er von der Stärke und Stabilität einer einheitlichen Holdingstruktur profitiert.",
        "about.page.values": "Unsere Werte",
        "about.value.innovation": "Innovation",
        "about.value.innovation.desc": "Wir entwickeln uns ständig mit Markttrends weiter und nutzen neue Technologien, um voraus zu bleiben.",
        "about.value.quality": "Qualität",
        "about.value.quality.desc": "Exzellenz steht im Mittelpunkt von allem, was wir tun, von Produkten bis zu Partnerschaften.",
        "about.value.growth": "Wachstum",
        "about.value.growth.desc": "Wir fördern nachhaltiges Wachstum in allen unseren Bereichen und unterstützen den Erfolg unserer Partner.",
        "about.value.partnership": "Partnerschaft",
        "about.value.partnership.desc": "Aufgebaut auf Vertrauen, Transparenz und langfristiger Zusammenarbeit mit unseren B2B-Partnern.",
        "about.page.operations": "Unsere Geschäftsbereiche",
        "about.page.operations.desc": "Sechs spezialisierte Bereiche, jeder ein Marktführer in seiner Branche, vereint unter einer Holdingstruktur.",
        "about.page.operations.cta": "Unsere Bereiche erkunden",
        "about.page.cta.title": "Bereit für eine Partnerschaft?",
        "about.page.cta.subtitle": "Treten Sie unserem Netzwerk erfolgreicher B2B-Partner bei und entdecken Sie, wie wir gemeinsam wachsen können.",

        // Operations
        "ops.title": "Unsere Geschäftsbereiche",
        "ops.page.title": "Unsere Geschäftsbereiche",
        "ops.page.subtitle": "Sechs spezialisierte Bereiche, die Exzellenz in verschiedenen Branchen liefern",
        "ops.page.cta.title": "Interesse an einer Partnerschaft?",
        "ops.page.cta.subtitle": "Kontaktieren Sie uns, um mehr über unsere Bereiche zu erfahren und wie wir zusammenarbeiten können.",
        "ops.fashion.desc": "Handel, Import und Export sowie Vertrieb von Bekleidung, Modeartikeln und Accessoires. Entwicklung eigener Modekollektionen, beginnend mit Regenbekleidung.",
        "ops.fashion.subtitle": "Fashion, Design & Lifestyle – entwickelt für Menschen, die mehr erwarten",
        "ops.fashion.full": "Die MADE mates Fashion GmbH steht für moderne Styles, hochwertige Materialien und smarte Kollektionen. Unser Fokus liegt auf dem Handel, Design und Vertrieb innovativer Fashion-Produkte – von funktionaler Regenbekleidung über trendige Accessoires bis hin zu kompletten Modekollektionen.\n\nWir entwickeln eigene Designs, setzen auf verantwortungsvolle Materialwahl und verbinden Funktion mit zeitgemäßem Look. Heute spezialisieren wir uns auf hochwertige Outerwear, morgen erweitern wir flexibel unser Sortiment um weitere Fashion-Bereiche. MADE mates Fashion – wo Style und Qualität eins werden.",
        "ops.healthcare.desc": "Handel und Vertrieb von medizinischen Produkten, Hilfsmitteln und Gesundheitsequipment, insbesondere Kranken- und Pflegebetten sowie robotisierte Lösungen.",
        "ops.healthcare.subtitle": "Innovative Healthcare-Lösungen für professionelle Anwender",
        "ops.healthcare.full": "Die MADE mates Healthcare GmbH bietet ein breites Spektrum medizinischer Produkte und moderner Gesundheitstechnologien. Unser Portfolio umfasst klassische und robotisierte Gesundheitsprodukte, Pflege- und Klinikbetten sowie vielfältiges medizinisches Equipment für den professionellen Einsatz.\n\nWir beliefern Sanitätshäuser, Kliniken und Fachbetriebe mit zuverlässigen, effizienten und zukunftsorientierten Lösungen. Ob manuelle Produkte oder automatisierte Systeme: Wir unterstützen das Gesundheitswesen mit Technologien, die Abläufe erleichtern und Versorgung verbessern.",
        "ops.toys.desc": "Handel, Import und Export sowie Vertrieb von Spielwaren aller Art für Großhändler und Fachhandelsketten.",
        "ops.toys.subtitle": "Spielwaren für Großhändler – Qualität, Sicherheit & Spaß",
        "ops.toys.full": "Die MADE mates Toys GmbH ist Ihr zuverlässiger Partner für hochwertige Spielwaren aller Art. Als spezialisierter Großhandelsanbieter beliefern wir Fachhandelsketten, Großhändler und Wiederverkäufer mit einem vielfältigen Portfolio an Produkten, die Kindern Freude bereiten und höchsten Sicherheitsstandards entsprechen.\n\nVom klassischen Spielzeug bis zu trendigen Neuheiten – wir sorgen für starke Sortimente und zuverlässige Lieferketten.",
        "ops.petstep.desc": "Handel und Vertrieb von Heimtierbedarf, insbesondere elektrische Fellpflege- und Waschbürsten sowie Sicherheits- und Transportlösungen.",
        "ops.petstep.subtitle": "Moderne Produkte für glückliche Haustiere & mehr Sicherheit im Alltag",
        "ops.petstep.full": "Die MADE mates Petstep GmbH steht für innovative Heimtierlösungen. Unser Sortiment umfasst elektrische Fellpflegegeräte, Waschbürsten, Transport- und Sicherheitsprodukte – darunter spezialisierte Lösungen für den sicheren Transport von Haustieren im Fahrzeug.\n\nWir entwickeln Produkte, die Tierwohl, Komfort und Funktion miteinander verbinden. Zusätzlich erweitern wir unser Angebot kontinuierlich um neue, smarte Lösungen für Haustierbesitzer.",
        "ops.must.desc": "Entwicklung, Handel und Vertrieb von elektronischen Bauteilen, insbesondere Signalkonnektoren für Leiterplatten für die Automobilindustrie.",
        "ops.must.subtitle": "Elektronische Komponenten für höchste industrielle Anforderungen",
        "ops.must.full": "Die MADE mates MUST GmbH entwickelt und vertreibt präzise elektronische Bauteile für industrielle Anwendungen. Unser Fokus liegt auf hochwertigen Signalkonnektoren und PCB-Komponenten, die in der Automobilindustrie, im Maschinenbau und in weiteren Hightech-Sektoren eingesetzt werden.\n\nMit technischem Know-how, hochwertigen Standards und kundenspezifischen Lösungen unterstützen wir Hersteller und Zulieferer dabei, zuverlässige und leistungsstarke elektronische Systeme zu realisieren.",
        "ops.power.desc": "Handel, Herstellung und Vertrieb von Metall- und Stahlgehäusen für Schaltschränke, Wechselrichter und Ladeinfrastrukturkomponenten.",
        "ops.power.subtitle": "Gehäuselösungen & Komponenten für die Energie von morgen",
        "ops.power.full": "Die MADE mates Power GmbH ist spezialisiert auf Metall- und Stahlgehäuse für technische Anwendungen – von Schaltschränken über Wechselrichtersysteme bis hin zur Ladeinfrastruktur. Wir fertigen, handeln und liefern präzise Gehäuselösungen für den Energie- und Industriebereich.\n\nUnsere Produkte schaffen Schutz, Struktur und Sicherheit in anspruchsvollen Umgebungen. MADE mates Power steht für langlebige Qualität, flexible Produktionsmöglichkeiten und verlässliche Partnerschaften.",
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

        // Home CTA
        "home.cta.title": "Bereit, unsere Geschäftsbereiche zu erkunden?",
        "home.cta.subtitle": "Entdecken Sie, wie MADE mates Holding Ihr vertrauenswürdiger Partner in verschiedenen Branchen werden kann.",
        "home.cta.contact": "Kontakt aufnehmen",
        "home.cta.learn": "Mehr erfahren",

        // Contact
        "contact.title": "Kontakt aufnehmen",
        "contact.page.title": "Kontaktieren Sie uns",
        "contact.page.subtitle": "Lassen Sie uns besprechen, wie wir gemeinsam erfolgreich sein können",
        "contact.page.form.title": "Senden Sie uns eine Nachricht",
        "contact.page.info.title": "Kontaktinformationen",
        "contact.page.info.desc": "Unser Team beantwortet gerne Ihre Fragen und bespricht potenzielle Partnerschaften in unseren verschiedenen Geschäftsbereichen.",
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
        "footer.imprint": "Impressum",
        "footer.privacy": "Datenschutz",

        // Cookie Banner
        "cookie.title": "Hinweis zu Cookies",
        "cookie.message": "Diese Website verwendet <strong>keine Tracking-Cookies</strong> oder Analyse-Tools. Wir verwenden ausschließlich technisch notwendige Cookies für die Funktionalität des Kontaktformulars. Diese Cookies speichern keine personenbezogenen Daten.",
        "cookie.privacy": "Weitere Informationen finden Sie in unserer",
        "cookie.privacyLink": "Datenschutzerklärung",
        "cookie.accept": "Verstanden",

        // Impressum
        "impressum.title": "Impressum",
        "impressum.back": "← Zurück zur Startseite",
        "impressum.constructionNotice": "Website im Aufbau",
        "impressum.constructionText": "Diese Website befindet sich derzeit im Aufbau und wird bis Ende Januar 2026 vollständig fertiggestellt sein. Alle unten angegebenen Kontaktinformationen sind gültig und können für Anfragen genutzt werden.",
        "impressum.section1": "Angaben gemäß § 5 TMG",
        "impressum.contact": "Kontakt",
        "impressum.email": "E-Mail",
        "impressum.phone": "Telefon",
        "impressum.representative": "Vertreten durch",
        "impressum.managing": "CEO",
        "impressum.register": "Registereintrag",
        "impressum.registerEntry": "Eintragung im Handelsregister",
        "impressum.registerCourt": "Registergericht",
        "impressum.registerNumber": "Registernummer",
        "impressum.vat": "Umsatzsteuer-ID",
        "impressum.vatText": "Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz",
        "impressum.euDispute": "EU-Streitschlichtung",
        "impressum.euDisputeText": "Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit",
        "impressum.euDisputeEmail": "Unsere E-Mail-Adresse finden Sie oben im Impressum.",
        "impressum.consumerDispute": "Verbraucherstreitbeilegung/Universalschlichtungsstelle",
        "impressum.consumerDisputeText": "Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",

        // Privacy
        "privacy.title": "Datenschutzerklärung",
        "privacy.back": "← Zurück zur Startseite",
        "privacy.updated": "Stand",
        "privacy.section1": "1. Datenschutz auf einen Blick",
        "privacy.general": "Allgemeine Hinweise",
        "privacy.generalText": "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.",
        "privacy.section2": "2. Datenerfassung auf dieser Website",
        "privacy.whoResponsible": "Wer ist verantwortlich für die Datenerfassung auf dieser Website?",
        "privacy.whoResponsibleText": "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.",
        "privacy.howCollect": "Wie erfassen wir Ihre Daten?",
        "privacy.howCollectText1": "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.",
        "privacy.howCollectText2": "Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.",
        "privacy.whatFor": "Wofür nutzen wir Ihre Daten?",
        "privacy.whatForText": "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden, sofern Sie dem zugestimmt haben.",
        "privacy.whatRights": "Welche Rechte haben Sie bezüglich Ihrer Daten?",
        "privacy.whatRightsText": "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.",
        "privacy.whatRightsContact": "Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.",
        "privacy.section3": "3. Kontaktformular",
        "privacy.contactText": "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.",
        "privacy.collectedData": "Erfasste Daten",
        "privacy.collectedName": "Name (Vorname und Nachname)",
        "privacy.collectedEmail": "E-Mail-Adresse",
        "privacy.collectedMessage": "Nachrichteninhalt",
        "privacy.collectedTime": "Zeitpunkt der Anfrage",
        "privacy.legalBasis": "Rechtsgrundlage",
        "privacy.legalBasisText": "Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO). Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen gespeichert.",
        "privacy.recipients": "Empfänger der Daten",
        "privacy.recipientsText": "Die über das Kontaktformular eingegebenen Daten werden über den E-Mail-Dienst",
        "privacy.recipientsText2": "verarbeitet und an die angegebene E-Mail-Adresse weitergeleitet.",
        "privacy.storage": "Speicherdauer",
        "privacy.storageText1": "Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.",
        "privacy.storageText2": "Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.",
        "privacy.section4": "4. Hosting",
        "privacy.hostingText1": "Wir hosten die Inhalte unserer Website bei folgendem Anbieter:",
        "privacy.hostingText2": "Details zu diesem Anbieter und zur Verarbeitung Ihrer Daten können Sie der Datenschutzerklärung des Hosting-Anbieters entnehmen.",
        "privacy.section5": "5. Cookies und Tracking",
        "privacy.noTracking": "Keine Tracking-Cookies",
        "privacy.noTrackingText": "Diese Website verwendet <strong>keine Tracking-Cookies</strong> oder Analyse-Tools wie Google Analytics. Wir tracken Ihr Nutzerverhalten nicht und erstellen keine Nutzerprofile.",
        "privacy.essential": "Essentielle Cookies",
        "privacy.essentialText": "Wir verwenden ausschließlich technisch notwendige Cookies, die für die Funktionsfähigkeit des Kontaktformulars erforderlich sind. Diese Cookies speichern keine personenbezogenen Daten und werden nach Ihrer Sitzung automatisch gelöscht.",
        "privacy.section6": "6. Ihre Rechte",
        "privacy.rightsText": "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.",
        "privacy.rightInfo": "Auskunftsrecht",
        "privacy.rightInfoText": "Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen.",
        "privacy.rightDeletion": "Recht auf Löschung",
        "privacy.rightDeletionText": "Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und Information, zur Erfüllung einer rechtlichen Verpflichtung, aus Gründen des öffentlichen Interesses oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.",
        "privacy.rightPortability": "Recht auf Datenübertragbarkeit",
        "privacy.rightPortabilityText": "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.",
        "privacy.rightCorrection": "Recht auf Berichtigung",
        "privacy.rightCorrectionText": "Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen.",
        "privacy.rightComplaint": "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
        "privacy.rightComplaintText": "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.",
        "privacy.section7": "7. Kontakt",
        "privacy.contactTitle": "Für Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte können Sie uns jederzeit kontaktieren:",
    },
};

// Global language state
let globalLanguage: Language = "en";

// Hook that listens to language changes
export function useI18n() {
    const [language, setLanguageState] = useState<Language>("en");
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Initialize language from localStorage on first mount
        if (!isInitialized) {
            const saved = localStorage.getItem("language") as Language;
            if (saved && (saved === "en" || saved === "de")) {
                globalLanguage = saved;
                setLanguageState(saved);
            }
            setIsInitialized(true);
        }

        // Listen for language change events
        const handleLanguageChange = () => {
            setLanguageState(globalLanguage);
        };

        window.addEventListener("languagechange", handleLanguageChange);
        return () => window.removeEventListener("languagechange", handleLanguageChange);
    }, [isInitialized]);

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
