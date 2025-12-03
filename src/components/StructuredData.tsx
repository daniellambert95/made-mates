import Script from 'next/script';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "MADE mates Holding GmbH",
        "url": "https://mademates.com",
        "logo": "https://mademates.com/images/logos/made-mates-logo-1.webp",
        "description": "MADE mates Holding GmbH drives growth across fashion, healthcare, toys, pet care, electronics, and energy sectors.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Friedrichstraße 171",
            "addressLocality": "Berlin",
            "postalCode": "10117",
            "addressCountry": "DE"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Service",
            "email": "info@mademates.com"
        },
        "sameAs": [
            "https://www.instagram.com/mademates",
            "https://www.facebook.com/mademates"
        ]
    };

    return (
        <Script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
